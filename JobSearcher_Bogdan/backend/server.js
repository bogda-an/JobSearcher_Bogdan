require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const jobRoutes = require('./routes/jobRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: err.message });
});

// 404 handling middleware
app.use((req, res, next) => {
  res.status(404).send({ message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
