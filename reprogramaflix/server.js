const filmesJson = require("./models/filmes.json"); //importar o json
const seriesJson = require("./models/series.json");

const express = require("express"); // chamando o express
const { response } = require("express");
const app = express(); //executando o express. Vamos fazer um get
//configura a porta

//fazer o get
app.get("/catalogo", (resquest, response) => {
  response.status(200).json([
    {
      filmes: filmesJson,
      series: seriesJson,
    },
  ]);
});
app.get("/filmes/:id", (request, response) => {
  let idRequest = request.params.id;
  let idEncontrado = filmesJson.ind((filme) => filme.id == idRequest);

  response.status(200).send(idEncontrado);
});

app.get("/series", (request, response) => {
  let idRequest = request.query.id;

  let IdEncontrado = seriesJson.find(serie.id == idRequest);

  response.status(200).send(idEncontrado);
});

//rota é com "/"
app.listen(7070, () => {
  console.log("alo doçura, to na porta 7070");
}); //numero da porta, depois chama a função

SERVER.JS;

const app = require("./src/app"); //chamando o arquivo app

const PORT = 7076;
//variavel de porta tem que ser sempre maiusculo

// configurando porta e iniciando o servidor
app.listen(PORT, () => {
  console.log(`alo doçura? to na porta ${PORT}`);
});
