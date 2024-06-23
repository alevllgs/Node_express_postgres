import pool from '../../database/config.js';
import findError from '../utils/utils.js';

export const getPosts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts');
    res.json(result.rows);
  } catch (error) {
    const customError = findError(error.code);
    res.status(customError.status).json({ error: customError.message });
  }
};

export const addPost = async (req, res) => {
  const { titulo, img, descripcion, likes = 0 } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
      [titulo, img, descripcion, likes]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    const customError = findError(error.code);
    res.status(customError.status).json({ error: customError.message });
  }
};

export const updatePostLikes = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *',
      [id]
    );
    if (result.rowCount === 0) {
      const customError = findError('404');
      return res.status(customError.status).json({ error: customError.message });
    }
    res.json(result.rows[0]);
  } catch (error) {
    const customError = findError(error.code);
    res.status(customError.status).json({ error: customError.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) {
      const customError = findError('404');
      return res.status(customError.status).json({ error: customError.message });
    }
    res.json({ message: "Post borrado" });
  } catch (error) {
    const customError = findError(error.code);
    res.status(customError.status).json({ error: customError.message });
  }
};

