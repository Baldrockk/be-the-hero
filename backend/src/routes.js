const express = require('express');
const crypto = require('crypto');
const routes = express.Router();

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/**
 * Métodos HTTP
 * Get: buscar/listar uma informação no back-end
 * POST: cria uma informação no back-end
 * PUT: altera uma informação no back-end
 * DELTE: deletar uma informação no back-end
 */

 /** 
  * tipos de parametros
  * query params: parametros nomeados enviados na rota após o "?" (filtos, paginação)
  * rote params: parametros utilizados para identificar recursos
  * request body: corpo da requisição utilizado para criar ou alterar recursos (criar um usario com nome/email por exemplo)
 */
routes.post('/sessions', SessionController.create);
routes.get('/ongs',OngController.index);

routes.post('/ongs',  OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);
routes.get('/profile', ProfileController.index);

module.exports = routes;