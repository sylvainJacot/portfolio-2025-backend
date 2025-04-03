const express = require('express');
const router = express.Router();
const { generateResponse } = require('../models/chatbot');

router.post('/message', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message invalide' });
    }

    const response = await generateResponse(message);
    res.status(200).json(response);
  } catch (error) {
    console.error('Erreur dans la route /message:', error);
    res.status(500).json({ 
      error: 'Erreur interne du serveur',
      message: error.message 
    });
  }
});

module.exports = router;