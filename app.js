var express = require('./config/server.js');

var modelInstituicao = new express.app.models.Instituicao(express);
var sql = 'show databases';
modelInstituicao.query(sql, function(result){
    console.log(result);
});

express.listen(3000, function(){
	console.log('Server ON in port 3000!');
	console.log('http://localhost:3000');
})