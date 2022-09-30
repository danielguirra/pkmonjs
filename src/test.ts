import { getPokemon } from './pokedex';

export const test = getPokemon(25).then((f) => {
  if (f) {
    console.log("Thanks For Install PkmonJs !!!😁");
  } else {
    console.log("Erro in install");
  }
});
