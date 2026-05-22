import express from 'express';

// ROTAS
import router from './routes/UsuarioRoutes.js';

const app = express();

// app.use()
app.use(router);

export default app;
