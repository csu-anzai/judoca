module.exports = function(app){
	app.get('/instituicao/adicionar', function(req, res){
		res.render('instituicao/adicionar');
	});

	app.get('/instituicao/remover', function(req, res){
		res.render('instituicao/remover');
	});
}