
exports.up = function(knex) {//up cria tabelas (oq acontece quando roda a migration)
 return knex.schema.createTable('ongs',function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('city').notNullable();
    table.string('whatsapp').notNullable();
    table.string('uf', 2).notNullable();
   
  });
};

exports.down = function(knex) {//volta atras,deleta tabelas
 return knex.schema.dropTable('ongs');
};
