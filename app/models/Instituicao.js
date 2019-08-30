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
    this.insertInstituicao = function(instituicao, callback){
        var values = [
            [
                instituicao.getNome(),
                instituicao.getCnpj(),
                instituicao.getTel1(),
                instituicao.getTel2(),
                instituicao.getEndereco().getRua(),
                instituicao.getEndereco().getNumero(),
                instituicao.getEndereco().getBairro(),
                instituicao.getEndereco().getCidade(),
                instituicao.getEndereco().getEstado(),
                instituicao.getEndereco().getCep(),
                instituicao.getEndereco().getComplemento()
            ]
        ];

        console.log(values);

        this._connection.connect(function(err){
            if (err) throw err;
            console.log("Connected!");

            this._connection.query(
                sql,
                function(err, result){
                    if(err) throw err;
                    return callback(result); // Essa função é o segundo parâmetro enviado na chamada de insertEntidade
                }
            )
        })
    }
}

module.exports = function(){
    return ModelInstituicao;
}