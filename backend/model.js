
var express = require('express');
var bodyParser = require('body-parser');

var core_use = require('cors');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended:true})
var pg = require('pg');
var app = express();


app.listen(3000);
app.use(core_use());
app.use( bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// Configure o acesso ao banco 
var config = {
  user: 'postgres', 
  database: 'diario-bordo', 
  password: '123456',
  port: 5432,
  max: 10, 
  idleTimeoutMillis: 30000, 
};

var pool = new pg.Pool(config);


// selectiona todas as ocorrências 
app.get('/getOcorrencias', function(req, res) {

    pool.connect(function(err, client, done) {

        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

         client.query('SELECT * from tb_ocorrencias o where o.fg_ativo = 1', function(err,result){

            done();

            if(err){
                return console.error('error running query', err);
            }

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(result.rows);

        });

    });

});

// Insere uma ocorrência 
app.post('/insereOcorrência', urlencodedParser, function (req, res) {
	  

     var dados = { id_motorista : 1, descricao: req.body.descricao, data: req.body.data, horario: req.body.horario, localizacao: req.body.localizacao, fg_ativo: 1} ;

     console.log("id_motorista: " + dados.id_motorista);
     console.log("descricão: " + dados.descricao);
     console.log("horario: " + dados.horario);
     console.log("horario: " + dados.horario);
     console.log("localizacão: " + dados.localizacao);
     console.log("fg_ativo: " + dados.fg_ativo);

	  pool.connect(function(err, client, done) {

	  if(err) {
	    return console.error('error fetching client from pool', err);
	  }

	  client.query( "INSERT INTO tb_pedidos values($1, $2, $3, $4, $5)",
			[ dados.id_motorista, dados.descricao, dados.horario, dados.localizacao, dados.fg_ativo])

	  done();

	  if(err) {
	    return console.error('error running query', err);
	  }

  	 });

	res.send('Ocorrência adicionada com sucesso');
});

// selectiona todas as ocorrências 
app.get('/getMotoristas', function(req, res) {

    pool.connect(function(err, client, done) {

        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

         client.query('SELECT * from tb_motoristas m where m.fg_ativo = 1', function(err,result){

            done();

            if(err){
                return console.error('error running query', err);
            }

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(result.rows);

        });

    });

});


