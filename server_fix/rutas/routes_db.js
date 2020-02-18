;
const express = require('express')
let api = express.Router(),
  control = require('../controles/crud')

api.get('/integrador', control.getDatos)
api.post('/integrador', control.postDatos)
api.put('/integrador', control.updateDatos)
api.delete('/integrador', control.deleteDatos)

module.exports = api