//const { request, response } = require("express");
const seriesJson = require("../models/series.json");

const getAll = (request, response) => {
  response.status(200).send([
    {
      series: seriesJson, //ta mandando o objeto que series. 
    },// obj dentro do objeto
  ]);
};

const getByid = (request, response) => {
  let idRequest = request.params.id;
  let idEncontrado = seriesJson.find(serie => serie.id == idRequest);

  response.status(200).send(idEncontrado); //manda o objeto encontrado
};

const getByTitulo = (request, response) => {
  let titleRequest = request.query.title; //querido postman, o que vc tem ai com nome title
  let titleEncontrado = seriesJson.find(serie => serie.title == titleRequest);//vou buscar no meu json
//let titleEncontrado = seriesJson.findIndex == titleRequest //findIndex vai buscar o index, numero
  response.status(200).send(titleEncontrado);

  console.log(titleRequest);
  console.log(titleEncontrado)
};

const getByGenre = (request, response) => {
  let genreRequest = request.query.genre;
  let genreEncontrado = seriesJson.find(serie =>  serie.genre.toString().includes(genreRequest)
  );

  response.status(200).send(genreEncontrado);
  console.log("to nos generos")
};

const createSerie = (request, response) => {
  //post
  let bodyRequest = request.body;
  const NewSerie = {
    id: seriesJson.length + 1,
    title: body.title,
    totalSeasons: body.totalSeasons,
    genre: body.genre,
    writers: body.writers,
    poster: body.poster,
    actors: body.actors,
    ratings: body.ratings,
  };

  /*"id": "13",
        "title": "FRIENDS",
        "totalSeasons": "10",
        "genre": [
            "Comedy",
            "Sitcom",
            "Romance"
        ],
        "writers": [
            "Marta Kaufmann",
            "David Crane"
        ],
        "poster": "https://br.web.img3.acsta.net/pictures/19/12/20/21/27/3055482.jpg",
        "actors": [
            "Jenifer Aniston",
            "Courteney Cox",
            "Mattew Perry",
            "Lisa Kudrow",
            "Mat LeBlanc",
            "David Schwimmer"
        ],
        "ratings": {
            "rating": "8.9",
            "likes": "1600001"
        }
*/

  seriesJson.push(NewSerie);

  response
    .status(201).json([{ mensagem: "série cadastrada com sucesso", NewSerie }]); //
};

//Put
const updateSerie = (request, response) => {
  let idRequest = request.params.id;//vai estar na URL
  let serieRequest = request.body;

  let newSerie = {
    id: idRequest,
    title: serieRequest.title,
    totalSeasons: serieRequest.totalSeasons,
    genre: serieRequest.genre,
    writers: serieRequest.writers,
    poster: serieRequest.poster,
    actors: serieRequest.actors,
    ratings: serieRequest.ratings,
  };

  let indexEncontrado = seriesJson.findIndex(serie => serie.id == idRequest);

  seriesJson.splice(indexEncontrado, 1, newSerie);

  response.status(201).json([
    {
      mensagem: "série atualizada com sucesso",
      newSerie,
    },
  ]);
};

//patch
const updateTitle = (request,response)=>{ 
    let idRequest = request.params.id //usuário mandou um id e guardei o id no idRequest, 
    let serieEncontrada = seriesJson.find(serie => serie.id == idRequest)
    serieEncontrada.title = newTitle //acessar o objeto, no caso o titulo deste objeto
    let newTitle = request.body.title //usuario mandou um novo titulo(body) 

    /* tudo o que tiver de Request tem a ver com o usuário
    
     
    ex: netflix
    usuário usando o client vai requisitar uma id
    vai na lupa buscar Lucifer (idRequest)
    eencontrou Lucifer (serieEncontrada)
    caixinha para editar Lucifer e colocou acento ou qq coisa(newTitle)
    a 
    
    aparece o response de sucesso com um objeto dentro do json, por isso se usa .json
    e se usa colchete(caso haja um array) e depois chaves com a mensagem, que é um objeto (chave : valor, chama o novo titulo)
    */
    response.status(201).json(
        [
            {
                mensagem: "título da série atualizado com sucesso",newTitle
            }

    ])
}




const deleteSerie = (request,response) => {
    let idRequest = request.params.id //é por id pq vai eliminar um elemento existente
    let indiceSerie = seriesJson.findIndex(serie => serie.id == idRequest) //o indice da serie = arquivo json.findIndex

    seriesJson.splice(indiceSerie, 1)

   /* fs.writeFile("./paraolar/src/models/series.json", JSON.stringify(seriesJson)={
if (err)  {  
return response.status(500).send({message: err}),*/

//fazendo esse fs, vai alterar o JSON


response.status(200).json([
  {

    "message": "serie deletada com sucesso",
    "deletada": idRequest,   //saber qual a serie que foi deletada
     seriesJson// mandando a lista toda sem o arquivo deletado
  }
])
}
//})
//}


module.exports = {
  getAll,
  getByid,
  getByTitulo,
  getByGenre,
  createSerie,
  updateSerie,
  updateTitle, 
  deleteSerie
};
