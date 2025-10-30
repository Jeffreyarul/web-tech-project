import express from 'express';
import {
  register,
  login,
  getUserProfile,
  createAdmin
} from '../controllers/authController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, getUserProfile);
router.post('/create-admin', protect, admin, createAdmin);

export default router;