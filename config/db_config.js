var mysql = require('mysql');

// Esse comando recebe um JSON como parâmetro!
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'judoca'
});

module.exports = function(){
    return connection;
}