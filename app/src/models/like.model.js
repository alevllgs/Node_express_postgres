import pool from '../../database/config.js';

export const getAllPosts = async () => {
  const result = await pool.query('SELECT * FROM posts');
  return result.rows;
};

export const createPost = async (titulo, img, descripcion, likes = 0) => {
  const result = await pool.query(
    'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
    [titulo, img, descripcion, likes]
  );
  return result.rows[0];
};




// Modelo vista controlado MVC
// Modelo -> Controlador -> Vista (router)