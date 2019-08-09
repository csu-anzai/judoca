module.exports = function(app){
	app.get('/aluno/adicionar', function(req, res){
		res.render('aluno/adicionar');
	});

	app.get('/aluno/consultar', function(req, res){
		res.render('aluno/consultar');
	});
    
	app.get('/aluno/alterar', function(req, res){
		res.render('aluno/alterar');
	});

	app.get('/aluno/remover', function(req, res){
		res.render('aluno/remover');
	});
}