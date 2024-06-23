import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import likeRoutes from './src/routes/like.routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/posts', likeRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor encendido en el puerto ${PORT}`);
});
