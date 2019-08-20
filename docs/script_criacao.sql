CREATE TABLE instituicao (
  id_inst INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  nome VARCHAR  NULL  ,
  cnpj VARCHAR  NULL  ,
  tel1 INTEGER UNSIGNED  NULL  ,
  tel2 INTEGER UNSIGNED  NULL    ,
PRIMARY KEY(id_inst));



CREATE TABLE endereco (
  id_end INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  rua VARCHAR  NULL  ,
  num INTEGER UNSIGNED  NULL  ,
  bairro VARCHAR  NULL  ,
  cidade VARCHAR  NULL  ,
  estado VARCHAR(2)  NULL  ,
  cep INTEGER UNSIGNED  NULL  ,
  comp VARCHAR  NULL    ,
PRIMARY KEY(id_end));



CREATE TABLE responsavel (
  id_resp INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  nome VARCHAR  NULL  ,
  cpf INTEGER UNSIGNED  NULL    ,
PRIMARY KEY(id_resp));



CREATE TABLE professor (
  id_prof INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  instituicao_id_inst INTEGER UNSIGNED  NOT NULL  ,
  reg_cbj INTEGER UNSIGNED  NULL  ,
  email VARCHAR  NULL  ,
  rg INTEGER UNSIGNED  NULL  ,
  cpf INTEGER UNSIGNED  NULL  ,
  data_nasc DATE  NULL  ,
  org_exp VARCHAR  NULL  ,
  tel1 INTEGER UNSIGNED  NULL  ,
  tel2 INTEGER UNSIGNED  NULL    ,
PRIMARY KEY(id_prof)  ,
INDEX professor_FKIndex1(instituicao_id_inst),
  FOREIGN KEY(instituicao_id_inst)
    REFERENCES instituicao(id_inst)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);



CREATE TABLE aluno (
  id_aluno INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  instituicao_id_inst INTEGER UNSIGNED  NOT NULL  ,
  responsavel_id_resp INTEGER UNSIGNED  NOT NULL  ,
  endereco_id_end INTEGER UNSIGNED  NOT NULL  ,
  nome VARCHAR  NULL  ,
  idade INTEGER UNSIGNED  NULL  ,
  rg INTEGER UNSIGNED  NULL  ,
  dt_nasc DATE  NULL  ,
  cpf INTEGER UNSIGNED  NULL  ,
  email VARCHAR  NULL  ,
  tel1 INTEGER UNSIGNED  NULL  ,
  tel2 INTEGER UNSIGNED  NULL  ,
  org_exp VARCHAR  NULL    ,
PRIMARY KEY(id_aluno)  ,
INDEX aluno_FKIndex1(endereco_id_end)  ,
INDEX aluno_FKIndex2(responsavel_id_resp)  ,
INDEX aluno_FKIndex3(instituicao_id_inst),
  FOREIGN KEY(endereco_id_end)
    REFERENCES endereco(id_end)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(responsavel_id_resp)
    REFERENCES responsavel(id_resp)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(instituicao_id_inst)
    REFERENCES instituicao(id_inst)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);



CREATE TABLE faixa (
  id_faixa INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  aluno_id_aluno INTEGER UNSIGNED  NOT NULL  ,
  data_grad DATE  NULL  ,
  cor INTEGER UNSIGNED  NULL    ,
PRIMARY KEY(id_faixa)  ,
INDEX faixa_FKIndex1(aluno_id_aluno),
  FOREIGN KEY(aluno_id_aluno)
    REFERENCES aluno(id_aluno)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION);




