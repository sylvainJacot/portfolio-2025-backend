const tf = require('@tensorflow/tfjs-node');
const use = require('@tensorflow-models/universal-sentence-encoder');
const { trainingData } = require('../utils/training-data');

let modelData = null;

async function loadModel() {
  try {
    console.log('Chargement du modèle...');
    const model = await use.load();
    console.log('Modèle chargé, génération des embeddings...');
    
    const allPatterns = trainingData.intents.flatMap(intent => intent.patterns);
    const allEmbeddings = await model.embed(allPatterns);
    const intentMapping = trainingData.intents.flatMap(intent =>
      Array(intent.patterns.length).fill(intent.tag)
    );

    modelData = { model, allEmbeddings, intentMapping };
    console.log('Modèle et embeddings prêts!');
    return true;
  } catch (error) {
    console.error('Erreur pendant le chargement du modèle:', error);
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

  if (maxScore > 0.5) {
    return trainingData.intents.find(i => i.tag === matchedIntentTag) || null;
  }
  return null;
}

async function generateResponse(input) {
  if (!modelData) {
    const loaded = await loadModel();
    if (!loaded) {
      return { response: "Le service n'est pas encore prêt. Réessayez dans un instant." };
    }
  }

  try {
    const intent = await recognizeIntent(input);
    if (!intent) {
      return { 
        response: "Je ne comprends pas votre demande. Pourriez-vous reformuler?",
        intentTag: "unknown"
      };
    }

    return {
      response: intent.responses[Math.floor(Math.random() * intent.responses.length)],
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

// Précharger le modèle au démarrage
loadModel().then(() => {
    console.log('Modèle préchargé avec succès!');
  }).catch(err => {
    console.error('Erreur pendant le préchargement du modèle:', err);
  });
  
  module.exports = {
    generateResponse
  };