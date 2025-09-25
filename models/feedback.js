const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true,
    trim: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  
  sentiment: {         // Optional: 'positive', 'neutral', 'negative'
    type: String,
    enum: ['positive','neutral','negative']
  },
  keywords: [String]   // Optional: extracted keywords from comment
});


module.exports = mongoose.model('Feedback',feedbackSchema)
