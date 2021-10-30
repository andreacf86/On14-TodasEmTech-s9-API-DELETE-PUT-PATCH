const express = require("express");
const app = express();
const cors = require("cors");
const filmesRouter = require("./routes/filmesRoutes");
const seriesRouter = require("./routes/seriesRoutes");

app.use(cors());
app.use(express.json());
app.use("/filmes", filmesRouter); //vou usar o filmesRouter no caminho filmes by Rafa
app.use("/series", seriesRouter);

module.exports = app; //exportando um arquivo, segundo Rafa
