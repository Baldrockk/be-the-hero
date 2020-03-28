const express = require('express');
const crypto = require('crypto');
const {celebrate, Segments, Joi} = require('celebrate');
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

routes.post('/ongs', celebrate({
 [Segments.BODY]: Joi.object().keys({
     name: Joi.string().required(),
     email: Joi.string().required().email(),
     whatsapp: Joi.string().required().min(10).max(11),
     city: Joi.string().required(),
     uf: Joi.string().required().length(2),

 })
}), OngController.create);

routes.post('/incidents', IncidentController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),  
      }).unknown(),
}), ProfileController.index);

module.exports = routes;