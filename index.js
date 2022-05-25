var express = require("express");
var app = express();

app.set("view engine", "html");
app.set("views", "./client");

app.use(express.static("./client"));

app.get('/', function(req, res) {
  res.render('Página-Inicial.ejs');
});

app.get('/gerar-teste', function(req, res) {
  res.render('Gerar-Teste.ejs');
})

app.listen(8080, () => {
  console.log(`Servidor rodando na porta 8080`);
});