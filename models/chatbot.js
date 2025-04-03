const tf = require('@tensorflow/tfjs-node');
const use = require('@tensorflow-models/universal-sentence-encoder');
const { trainingData } = require('../utils/training-data');

let modelData = null;
let modelLoading = false;
let modelLoadAttempts = 0;
const MAX_LOAD_ATTEMPTS = 3;

async function loadModel() {
  if (modelLoading) {
    console.log('Modèle déjà en cours de chargement...');
    return false;
  }
  
  if (modelLoadAttempts >= MAX_LOAD_ATTEMPTS) {
    console.error(`Échec après ${MAX_LOAD_ATTEMPTS} tentatives de chargement du modèle`);
    return false;
  }
  
  modelLoading = true;
  modelLoadAttempts++;
  
  try {
    console.log(`Tentative de chargement du modèle (${modelLoadAttempts}/${MAX_LOAD_ATTEMPTS})...`);
    const model = await use.load();
    console.log('Modèle chargé, génération des embeddings...');
    
    const allPatterns = trainingData.intents.flatMap(intent => intent.patterns);
    const allEmbeddings = await model.embed(allPatterns);
    const intentMapping = trainingData.intents.flatMap(intent =>
      Array(intent.patterns.length).fill(intent.tag)
    );

    modelData = { model, allEmbeddings, intentMapping };
    console.log('Modèle et embeddings prêts!');
    modelLoading = false;
    return true;
  } catch (error) {
    console.error('Erreur pendant le chargement du modèle:', error);
    modelLoading = false;
    return false;
  }
}

async function recognizeIntent(input) {
  if (!modelData) {
    const loaded = await loadModel();
    if (!loaded) throw new Error('Impossible de charger le modèle');
  }

  const { model, allEmbeddings, intentMapping } = modelData;
  
  const userInputEmb = await model.embed([input]);
  const similarities = await tf.matMul(userInputEmb, allEmbeddings.transpose()).data();
  const maxIndex = similarities.indexOf(Math.max(...similarities));
  const maxScore = similarities[maxIndex];
  const matchedIntentTag = intentMapping[maxIndex];

  console.log(`Input: "${input}" | Score: ${maxScore.toFixed(2)} | Intent: ${matchedIntentTag}`);
  
  if (maxScore > 0.5) {
    return trainingData.intents.find(i => i.tag === matchedIntentTag) || null;
  }
  return null;
}

async function generateResponse(input) {
  try {
    if (!modelData) {
      const loaded = await loadModel();
      if (!loaded) {
        return { 
          response: "Le service n'est pas encore prêt. Réessayez dans un instant.",
          intentTag: "error"
        };
      }
    }

    const intent = await recognizeIntent(input);
    if (!intent) {
      return { 
        response: "Je ne comprends pas votre demande. Pourriez-vous reformuler?",
        intentTag: "unknown"
      };
    }

    const randomResponse = intent.responses[Math.floor(Math.random() * intent.responses.length)];
    return {
      response: randomResponse,
      intentTag: intent.tag,
      followUp: intent.followUp
    };
  } catch (error) {
    console.error('Erreur dans generateResponse:', error);
    return { 
      response: "Désolé, j'ai des difficultés à répondre. Veuillez réessayer!",
      intentTag: "error" 
    };
  }
}

// Précharger le modèle au démarrage avec gestion d'erreur
setTimeout(() => {
  loadModel().then(success => {
    if (success) {
      console.log('Modèle préchargé avec succès!');
    } else {
      console.warn('Échec du préchargement du modèle - les requêtes tenteront de charger à la demande');
    }
  }).catch(err => {
    console.error('Erreur inattendue pendant le préchargement du modèle:', err);
  });
}, 2000); // Petite temporisation pour laisser le serveur démarrer

module.exports = {
  generateResponse
};