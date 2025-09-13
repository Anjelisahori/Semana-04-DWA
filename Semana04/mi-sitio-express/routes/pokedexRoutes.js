const express = require("express");
const router = express.Router();

const pokedexController = require("../controllers/pokedexController");

router.get("/", pokedexController.pokedex);
router.post("/", pokedexController.savePokemon);

module.exports = router;
