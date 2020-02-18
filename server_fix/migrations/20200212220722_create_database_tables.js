
exports.up = function(knex) {
    return knex.schema
    .createTable('imagen', function(img) {
        img.increments('id').notNullable();
        img.string('nombreImagen').notNullable();
        img.string('tipoImagen').notNullable();
        img.text('contenidoImagen').notNullable();
    })
    .createTable('productos', function(prod) {
        prod.increments('id').notNullable();
        prod.string('nombre').notNullable();
        prod.string('descripcion').notNullable();
        prod.string('precio').notNullable();
        prod.string('tipo').notNullable();
        prod.integer('imagen').notNullable().references('id').inTable('imagen').onDelete('cascade');;
    })
    .createTable('recicladoras', function(rec) {
        rec.increments('id').notNullable();
        rec.string('nombre').notNullable();
        rec.string('latitud').notNullable();
        rec.string('longitud').notNullable();
    })
    .createTable('usuarioLogin', function(ul){
        ul.increments('id').notNullable();
        ul.string('usuario').notNullable();
        ul.string('password').notNullable();
        ul.string('nombre').notNullable();
        ul.string('apellido').notNullable();
        ul.string('correo').notNullable();
        ul.string('telefono').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists( 'imagen' )
    .dropTableIfExists( 'productos' )
    .dropTableIfExists( 'recicladoras' )
    .dropTableIfExists( 'usuarioLogin' )
};
