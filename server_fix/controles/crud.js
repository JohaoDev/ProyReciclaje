;
const config = require('../knexfile')
const env = 'development'
const db = require('knex')(config[env])

const getDatos = (req, res) => {
    const tabla = req.query.tabla
    const campo = req.query.campo
    db.select(campo).from(tabla)
    .then( resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

const postDatos = (req, res) => {
    const tabla = req.body.tabla
    const datos = req.body.datos
    db(tabla).returning('id').insert(datos)
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

const updateDatos = (req, res) => {
    const tabla = req.query.tabla
    const datos = req.body.datos
    datos.forEach( element => {
        db(tabla).where('id', element.id).update(element)
        .then( resultado => {
            return res.status(200).json({
                ok: true,
                datos: resultado
            })
        })
        .catch((error) => {
            return res.status(500).json({
                ok: false,
                datos: null,
                mensaje: `Error del servidor: ${error}` 
            })
        })
    })
}

const deleteDatos = (req, res) => {
    const tabla = req.query.tabla
    const id = req.query.id
    db(tabla).where('id', id).delete()
    .then(resultado => {
        return res.status(200).json({
            ok: true,
            datos: resultado
        }) 
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}` 
        })
    })
}

module.exports = {
    getDatos,
    postDatos,
    updateDatos,
    deleteDatos,
}