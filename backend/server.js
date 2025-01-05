import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import errorHandler from './middleware/errorHandler.js';
import { apiLimiter } from './middleware/rateLimit.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies
app.use('/api', apiLimiter); // Apply rate limiting to API routes

// Routes
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import snippetRoutes from './routes/snippetRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/snippet', snippetRoutes);
app.use('/api/contact', contactRoutes);

// Catch-all for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
app.use(errorHandler);

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/CodeGalaxy';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
