const express = require("express");
const router = express.Router();
const controller = require("../controllers/filmesController.js");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/title", controller.pegarTitulo);
router.get("/filtrar/genre", controller.filtrarGenero);
router.post("/criar", controller.createMovie);
router.patch("/update/:id", controller.updateTitle);
router.put("/update/:id", controller.updateMovie);
router.delete("/delete/:id", controller.deleteMovie);
//router.put('/update/:id', controller.)

module.exports = router;
