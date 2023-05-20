import express from 'express';
import { getAllUser, login, signup } from '../controllers/user-controller';

export const router = express.Router();

router.get("/users", getAllUser);
router.post("/signup", signup);
router.post("/login", login);

export default router;
