import { Telefone } from "../models/negocio/Telefone.js"
import { TelefoneDAO } from "../models/persistencia/TelefoneDAO.js";

export class TelefoneController {
    async cadastrar(req, res) {
        try {
            const telefone = new Telefone(req.body);

            const dao = new TelefoneDAO();

            const id = await dao.cadastrar(telefone);

            res.status(201).json({
                id
            });

        } catch (e) {

            res.status(400).json({
                erro: e.message || e
            });

        }
    }

    async buscar() {
        try {

            const id = req.params.id;

            if (!id) {
                res.status(400).json({
                    erro: 'Telefone inexistente'
                });
            }

            const dao = new TelefoneDAO();

            const busca = await dao.buscaPorId(id);

        } catch (e) {
            res.status(400).json({
                erro: e.message || e
            });
        }
    }

    async atualizar() {
        try {
            const dados = req.body;

            if (!dados) {
                res.status(400).json({
                    erro: 'Não há campos atualizados'
                });
            }

            const dao = new TelefoneDAO;

            const update = await dao.atualizarNum(dados);

            res.status(201).json({
                update
            });
        } catch (e) {
            res.status(400).json({
                erro: e.message || e
            });
        }
    }

    async deletar(req, res) {

        try {
            const id = req.params.id;

            if (!id) {
                return res.status(400).json({
                    erro: 'Telefone inexistente'
                });
            }

            const dao = new TelefoneDAO();

            const DELETE = await dao.deletar(id);

            res.status(200).json(DELETE);

        } catch (e) {
            res.status(400).json({
                erro: e.message || e
            });
        }
    }
}