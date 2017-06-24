CREATE DATABASE "diario-bordo"
WITH ENCODING='UTF8'
TEMPLATE=template0
CONNECTION LIMIT=-1;

create table tb_motoristas(
    id_motorista integer not null,
    nome_completo varchar(60),
    email varchar(60),
    senha varchar(20),
    fg_ativo integer,

    constraint pk_tb_motorista_id_motorista primary key(id_motorista)
);


create table tb_ocorrencias(
    id_ocorrencia serial not null,
    id_motorista integer not null,
    descricao varchar(200),
    data varchar(30),
    horario varchar(30),
    localizacao varchar(30),
    fg_ativo integer,

    constraint pk_tb_ocorrencias_id_ocorrencia primary key(id_ocorrencia),
    constraint fk_tb_ocorrencias_id_motorista foreign key(id_motorista) references tb_motoristas
);


insert into tb_motoristas
values
( 1, 'Joaquim Silva', 'jsilva@gmail.com', '********', 1);













