import { getPokemon } from './pokedex'

getPokemon(25).then((f) => {
  if (f) {
    console.log(true)
  } else {
    console.log(false)
  }
})
