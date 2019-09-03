function ModelInstituicao(app){
  this._connection = app.config.db_config;

  this.query = function(sql, callback){
    this._connection.connect(function(err){
      if (err) throw err;
      console.log("Connected!");
      this._connection.query(
        sql,
        function(err, result){
          if(err) throw err;
          return callback(result);
        }
      )
    })
  }

  // Recebemos um objeto entidade e um objeto endereço e inserimos no banco
  this.insertInstituicao = function(instituicao){
    this._connection.beginTransaction(function(err) {
      if (err) {
        throw err;
      }

      var dados_endereco = [
        [
          instituicao.getEndereco().getRua(),
          instituicao.getEndereco().getNumero(),
          instituicao.getEndereco().getBairro(),
          instituicao.getEndereco().getCidade(),
          instituicao.getEndereco().getEstado(),
          instituicao.getEndereco().getCep(),
          instituicao.getEndereco().getComplemento()
        ]
      ];

      this._connection.query('INSERT INTO endereco (rua, num, bairro, cidade, estado, cep, comp) VALUES ?', [dados_endereco], function(err, result) {
        if (err) {
          this._connection.rollback(function() {
            throw err;
          });
        }
        else{
          var id_endereco = result.insertId;
          var dados_instituicao = [
            [
              id_endereco,
              instituicao.getNome(),
              instituicao.getCnpj(),
              instituicao.getTel1(),
              instituicao.getTel2()
            ]
          ];

          this._connection.query('INSERT INTO instituicao (id_end, nome, cnpj, tel1, tel2) VALUES ?', [dados_instituicao], function(err, result) {
            if (err) {
              this._connection.rollback(function() {
                throw err;
              });
            }
            this._connection.commit(function(err){
              if (err){
                this._connection.rollback(function() {
                  throw err;
                });
              }
            });
          });
        };
      });
    });
  }
}

  module.exports = function(){
    return ModelInstituicao;
  }
