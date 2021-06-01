const express = require('express')
const routes = exress.Router()
const produtoController = require('../controller/produtoController')

//listar
routes.get('/',produtoController.list)

//filtro
routes.post('/',produtoController.filtro)

//abre add
routes.get('/add',produtoController.abreadd)

//add
routes.post('/add',produtoController.add)

//abre edit
routes.get('/edit/:id',produtoController.abreedit)

//edit
routes.post('/edit/:id',produtoController.edit)

//del
routes.get('/del/:id',produtoController.del)

module.exports = routes;

