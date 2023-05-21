const express = require('express')

const routes = express.Router();

const PropertiesController = require('./controllers/PropertiesController')

routes.get('/properties', PropertiesController.read)
routes.post('/properties', PropertiesController.create)
routes.delete('/properties/:id', PropertiesController.delete)
routes.put('/properties/:id', PropertiesController.update)

routes.get('/', (request, response) => {
    return response.json({
        nome: "Katia",
        sobrenome: "Andrade"
    })
}) 

module.exports = routes