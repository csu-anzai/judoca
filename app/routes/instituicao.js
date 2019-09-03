module.exports = function(app){
	app.get('/instituicao/adicionar', function(req, res){
		app.app.controllers.ControllerInstituicao.renderInstituicao(app, req, res);
	});

	app.post('/instituicao/adicionar', function(req, res){
		app.app.controllers.ControllerInstituicao.insereInstituicao(app, req, res);
	});

	app.get('/instituicao/index', function(req, res){
		app.app.controllers.ControllerInstituicao.renderIndexInstituicao(app, req, res);
	});
}
