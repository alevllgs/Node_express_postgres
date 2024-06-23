import { Router } from 'express';
import { getPosts, addPost, updatePostLikes, deletePost } from '../controllers/like.controller.js';

const router = Router();

router.get('/', getPosts);
router.post('/', addPost);
router.put('/:id', updatePostLikes); // Utiliza updatePostLikes en lugar de updatePost
router.delete('/:id', deletePost);

export default router;


