// src/routes/authRoutes.ts
import { Router } from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/auth_controller';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router;
