import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';
// import userRouter from './routes/userRoutes.js';
// import ImageRouter from './routes/ImageRoutes.js';

const PORT = process.env.PORT || 4000;
const app = express();

// Connect to MongoDB
await connectDB();

// Middleware
app.use(cors());

app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello From Backend Server');
});
// app.use('/api/user', userRouter);
// app.use('/api/image', ImageRouter)

// Start server
app.listen(PORT, () => {
  console.log('Server is running on port', +PORT);
});