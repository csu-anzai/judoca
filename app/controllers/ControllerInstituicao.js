module2.exports.insereInstituicao = function(app, req, res){
    var dados = req.body;
    console.log(dados);
    var instituicao = new app.app.class.Entidade();
    var endereco = new app.app.class.Endereco();
}