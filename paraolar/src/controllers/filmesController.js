const { request, response } = require("express");
const filmesJson = require("../models/filmes.json");

//chamar o Json

const getAll = (request, response) => {
  response.status(200).send([
    {
      filmes: filmesJson,
    },
  ]);
};

//função getById retorna um filme
const getById = (request, response) => {
  let idRequest = request.params.id;
  let idEncontrado = filmesJson.find((filme) => filme.id == idRequest);

  response.status(200).send(idEncontrado);
};

const pegarTitulo = (request, response) => {
  //get pelo titulo
  let tituloRequest = request.query.Title;
  let tituloEncontrado = filmesJson.findIndex == tituloRequest;

  response.status(200).send(tituloEncontrado);
};

const filtrarGenero = (request, response) => {
  let genreRequest = request.query.genre;
  let generoEncontrado = filmesJson.filter(
    (filme) => filme.Genre.toLocaleLowerCase().includes(genreRequest) //
  );

  response.status(200).send(generoEncontrado);
};

const createMovie = (request, response) => {
  let body = request.body;
  let novoFilme = {
    id: filmesJson.length + 1,
    Title: body.Title,
    Year: body.year,
    Rated: body.Rated,
    Released: body.Released,
    Runtime: body.Runtime,
    Genre: body.Genre,
    Director: body.Director,
    Writer: body.Writer,
    Actors: body.Actors,
    Plot: body.Plot,
    Language: body.Language,
    Country: body.Country,
    Awards: body.Awards,
  };

  filmesJson.push(novoFilme);

  response.status(201).json([
    {
      mensagem: "filme cadastrado com sucesso",
      novoFilme,
    },
  ]);
};

const updateTitle = (request, response) => {
  const idRequest = request.params.id;
  let novoTitulo = request.body.Title;

  response.status(201).json([
    {
      mensagem: "filme alterado com sucesso",
      novoTitulo,
    },
  ]);
};

const updateMovie = (req, res) => {
    const idRequest = req.params.id;
    let movieRequest = req.body;
  
    let newMovie = {
      id: idRequest,
      Title: movieRequest.Title,
      Year: movieRequest.Year,
      Rated: movieRequest.Rated,
      Released: movieRequest.Released,
      Runtime: movieRequest.Runtime,
      Genre: movieRequest.Genre,
      Director: movieRequest.Director,
      Writer: movieRequest.Writer,
      Actors: movieRequest.Actors,
      Plot: movieRequest.Plot,
      Language: movieRequest.Language,
      Country: movieRequest.Country,
      Awards: movieRequest.Awards
    }
  
    let indexFind = filmesJson.findIndex(filme => filme.id == idRequest);
  
    filmesJson.splice(indexFind, 1, newMovie);
  
    res.status(200).json([
      {
        "mensagem": "Filme atualizado com sucesso",
        newMovie
      }
    ])
  };


  const deleteMovie = (request, response) => {
    let idRequest = request.params.id;
    let indiceFilmes = filmesJson.findIndex(filmes => filmes.id == idRequest)
filmesJson.splice(indiceFilmes, 1) //vai retirar 1
fs.writeFile("./src/models/filmesJson", JSON.stringify(filmesJson) ={
    if (err){ 
        return response.status(500).send({message: err});
    }
});
response.status(200).json([
    {
        "message": "filme deletado com sucesso", 
    "deletado": idRequest, filmesJson}
])
  }

module.exports = {
  getById,
  getAll,
  pegarTitulo,
  filtrarGenero,
  createMovie,
  updateTitle,
  updateMovie,
  deleteMovie
};
