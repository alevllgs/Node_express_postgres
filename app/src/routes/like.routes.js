import { Router } from 'express';
import { getPosts, addPost, updatePost, deletePost } from '../controllers/like.controller.js';

const router = Router();

router.get('/', getPosts);
router.post('/', addPost);
router.put('/:id', updatePost); // Ruta PUT para actualizar un post
router.delete('/:id', deletePost); // Ruta DELETE para eliminar un post

export default router;
