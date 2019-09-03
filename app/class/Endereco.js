function Endereco(){
	this._rua = null;
	this._numero = null;
	this._bairro = null;
	this._cidade = null;
	this._estado = null;
	this._cep = null;
	this._complemento = null;

	this.getRua = function(){
		return this._rua;
	}
	this.setRua = function(new_value){
		this._rua = new_value;
	}
	this.getNumero = function(){
		return this._numero;
	}
	this.setNumero = function(new_value){
		this._numero = new_value;
	}
	this.getBairro = function(){
		return this._bairro;
	}
	this.setBairro = function(new_value){
		this._bairro = new_value;
	}
	this.getCidade = function(){
		return this._cidade;
	}
	this.setCidade = function(new_value){
		this._cidade = new_value;
	}
	this.getEstado = function(){
		return this._estado;
	}
	this.setEstado = function(new_value){
		this._estado = new_value;
	}
	this.getCep = function(){
		return this._cep;
	}
	this.setCep = function(new_value){
		this._cep = new_value;
	}
	this.getComplemento = function(){
		return this._complemento;
	}
	this.setComplemento = function(new_value){
		this._complemento = new_value;
	}
}

module.exports = function(){
	return Endereco;
}