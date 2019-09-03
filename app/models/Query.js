function ModelQuery(app){
  this._connection = app.config.db_config;

  this.query = function(sql, callback){
    this._connection.query(
      sql,
      function(err, result){
        if(err) throw err;
        return callback(result);
      }
    )
  }
}

module.exports = function(){
    return ModelQuery;
}
