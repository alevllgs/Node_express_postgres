import { Router } from 'express';
import { getPosts, addPost } from '../controllers/like.controller.js';

const router = Router();

router.get('/', getPosts);
router.post('/', addPost);

export default router;
