var listaEstado = ["AC", "AL", "AP", "AM", "BA", "CE", "DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC", "SP", "SE", "TO"];

module.exports.insereInstituicao = function(app, req, res){
  // Recupera os dados do formulário
  var dados = req.body;

  var instituicao = new app.app.class.Instituicao();
  var endereco = new app.app.class.Endereco();

  // Validações
  req.assert('NomeInst', 'O Nome deve ter entre 4 e 50 caracteres.').len(4, 50);
  req.assert('CnpjInst', 'Verifique o CNPJ.').len(17);
  req.assert('TelInst1', 'Verifique o Telefone 1.').len(15);
  req.assert('TelInst2', 'Verifique o Telefone 2.').len(15);
  req.assert('EndrInst', 'O Endereço deve possuir entre 4 e 50 caracteres.').len(4, 50);
  req.assert('NumInst', 'Verifique o número da Instituição.');
  req.assert('ComplInst', 'O Complemento deve possuir no máximo 20 caracteres.').isLength({max: 20});
  req.assert('BairroInst', 'O Bairro deve possuir no máximo 30 caracteres.').isLength({max: 30});
  req.assert('CepInst', 'Verifique o CEP.').len(9);

  var erros = req.validationErrors();

  // TODO
  // Caso haja erro, retornar mensagem para o usuário na tela

  endereco.setRua(dados.EndrInst);
  endereco.setNumero(dados.NumInst);
  endereco.setBairro(dados.BairroInst);
  endereco.setCidade(dados.CidadeInst);
  endereco.setEstado(dados.EstadoInst);
  endereco.setCep(dados.CepInst);
  endereco.setComplemento(dados.ComplInst);
  instituicao.setNome(dados.NomeInst);
  instituicao.setCnpj(dados.CnpjInst);
  instituicao.setTel1(dados.TelInst1);
  instituicao.setTel2(dados.TelInst2);
  instituicao.setEndereco(endereco);

  var modelInstituicao = new app.app.models.Instituicao(app);
  modelInstituicao.insertInstituicao(instituicao);

  res.render('instituicao/adicionar', {listaEstado: listaEstado});
}

module.exports.renderInstituicao = function(app, req, res){
  res.render('instituicao/adicionar', {listaEstado: listaEstado});
}

module.exports.renderIndexInstituicao = function(app, req, res){
    var endereco = new app.app.class.Endereco();
    var instituicao = new app.app.class.Instituicao();

    var modelQuery = new app.app.models.Query(app);
    var sql = "SELECT I.nome, I.cnpj, I.tel1, I.tel2, E.rua, E.num, E.bairro " +
              "FROM instituicao I INNER JOIN endereco E " +
              "WHERE I.id_end = E.id_end;";

    console.log(modelQuery);
    modelQuery.query(sql, function(result){
        console.log(result);
        res.render('instituicao/index', {instConsulta: result});
    });
}
