import { getAllPokemon, getPokemon } from './pokedex';

getPokemon(1).then((f) => {
  if (f) {
    console.log("Thanks For Install PkmonJs !!!😁");
  } else {
    console.log("Erro in install");
  }
});

