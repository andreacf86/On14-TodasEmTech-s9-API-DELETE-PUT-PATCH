const express = require("express");
const router = express.Router();
const controller = require("../controllers/seriesControllers.js");
//const { get } = require("./filmesRoutes");

router.get("", controller.getAll);
//console.log("que danado ta acontecendo, Postman dos infernos?");
router.get("/title", controller.getByTitulo);
router.get("/:id", controller.getByid);
router.get("/genre", controller.getByGenre);
router.post("/criar", controller.createSerie);
router.put("/atualizar/:id", controller.updateSerie);
router.patch("/novotitulo/:id", controller.updateTitle);
router.delete("/delete/:id", controller.deleteSerie);

module.exports = router;
