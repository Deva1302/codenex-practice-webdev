const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB connection (replace with your URI if needed)
mongoose.connect('mongodb://localhost:27017/testdb')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Simple schema
const ItemSchema = new mongoose.Schema({
  name: String
});
const Item = mongoose.model('Item', ItemSchema);

// Route
app.get('/', (req, res) => {
  res.send('Hello from Express + MongoDB');
});

app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
