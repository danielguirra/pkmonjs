import { getPokemon } from './pokedex';

getPokemon(25).then((f) => {
  if (f) {
    console.log(f.stats.types.name.type2)
  }
})
