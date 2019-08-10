module.exports = function(app){
	app.get('/professor/adicionar', function(req, res){
		res.render('professor/adicionar');
	});

	app.get('/professor/consultar', function(req, res){
		res.render('professor/consultar');
	});
    
	app.get('/professor/alterar', function(req, res){
		res.render('professor/alterar');
	});

	app.get('/professor/remover', function(req, res){
		res.render('professor/remover');
	});
}