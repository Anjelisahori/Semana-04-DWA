const pokemons = [];

const pokedex = (req, res) => {
  res.render("pokedex", { title: "Pokédex", pokemons });
};

const savePokemon = (req, res) => {
  const { nombre, tipo, nivel, habilidad, descripcion } = req.body;
  pokemons.push({ nombre, tipo, nivel, habilidad, descripcion });
  res.redirect("/pokedex");
};

module.exports = {
  pokedex,
  savePokemon
};
