var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node'
});
 
connection.connect();
 
connection.query('SELECT * FROM usuario', function (error, results, fields) {
  if (error) throw error;
  for(var i = 0;i < results.length;i++){
    console.log(`Hola, mi nombre es ${results[i].nombre} y mi edad es ${results[i].edad} de años`);
  }
  
});

connection.query('INSERT INTO usuario VALUES(6, "HELON", 100);', function (error, results, fields) {
    if (error) throw error;
  });

  connection.query('UPDATE usuario SET nombre = "TEST" WHERE id = 2 ', function (error, results, fields) {
    if (error) throw error;
  });

  connection.query('DELETE FROM usuario WHERE id = 3', function (error, results, fields) {
    if (error) throw error;
  });

  connection.query('SELECT * FROM usuario', function (error, results, fields) {
    if (error) throw error;
    for(var i = 0;i < results.length;i++){
      console.log(`Hola, mi nombre es ${results[i].nombre} y mi edad es ${results[i].edad} de años`);
    }
    
  });

  /*

1.- INSERTAR UNA TUPLA
2.- ACTUALIZEN id 2 EN nombre -> TEST
3.- BORREN LA id 3
4.- PROYECTEN LA NUEVA TABLA

*/
connection.end();