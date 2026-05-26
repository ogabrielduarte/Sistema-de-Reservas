import express from 'express';
import { TelefoneController } from '../controllers/TelefoneController.js';

const controller = new TelefoneController();

const router = express.Router();

// ROTAS
router.post('/telefones', controller.cadastrar);

router.get('/telefones', controller.buscar);

router.put('/telefones', controller.atualizar);

router.delete('/telefones', controller.deletar);

// EXPORT
export default router;