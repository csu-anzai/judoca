module.exports.insereInstituicao = function(app, req, res){
    var dados = req.body;
    console.log(dados);
    var instituicao = new app.app.class.Instituicao();
    var endereco = new app.app.class.Endereco();

    req.assert('NomeInst', 'O Nome da Instituição deve ter entre 1 e 100 caracteres.').len(1, 20);
    req.assert('NomeInst', 'Nome instituição deve ter entre 1 e 100 caracteres.').len(1, 20);



    var erros = req.validationErrors();
    console.log(erros);
    
    res.render('instituicao/adicionar', {listaEstado: listaEstado});
}

module.exports.renderInstituicao = function(app, req, res){
    var listaEstado = ["AC", "AL", "AP", "AM", "BA", "CE", "DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC", "SP", "SE", "TO"];

    res.render('instituicao/adicionar', {listaEstado: listaEstado});
}
