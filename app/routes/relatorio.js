module.exports = function(app){
	app.get('/relatorio/aniversariantes', function(req, res){
		res.render('relatorio/aniversariantes');
	});
}