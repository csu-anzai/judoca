function ModelInstituicao(express){
    this._connection = express.config.db_config;

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

    // Recebemos um objeto entidade e um objeto endereco e inserimos no banco
    this.insertEntidade = function(entidade, callback){
        var values = [
            [
                entidade.nome,
                entidade.cnpj,
                entidade.tel1,
                entidade.tel2
            ]
        ];

        this._connectTION.connect(function(err){
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
}

module.exports = function(){
    return ModelInstituicao;
}