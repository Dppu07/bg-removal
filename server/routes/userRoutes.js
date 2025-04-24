import express from 'express';
import { clerkWebhooks } from '../controllers/userController.js';
// import authUser from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/webhooks', clerkWebhooks);
// userRouter.get('/credits', authUser, userCredits);  // This route now uses the updated middleware

export default userRouter;