function Entidade(){
	this._nome = null;
	this._cnpj = null;
	this._tel1 = null;
	this._tel2 = null;

	this.getNome = function(){
		return this._nome;
	}
	this.setNome = function(new_value){
		this._nome = new_value;
	}
	this.getCnpj = function(){
		return this._cnpj;
	}
	this.setCnpj = function(new_value){
		this._cnpj = new_value;
	}
	this.getTel1 = function(){
		return this._tel1;
	}
	this.setTel1 = function(new_value){
		this._tel1 = new_value;
	}
	this.getTel2 = function(){
		return this._tel2;
	}
	this.setTel2 = function(new_value){
		this._tel2 = new_value;
	}
}

module.exports = function(){
	return Entidade;
}