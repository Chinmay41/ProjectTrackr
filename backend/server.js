const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO)
  .then(() => console.log('Database connected'))
  .catch((err) => console.error(err));

// Routes Placeholder
app.use('/api', require('./routes'));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
