# PkmonJs

A package to use the PokeApi

## Author

- [@danielguirra](https://www.github.com/danielguirra)

## Installation

Install pkmonjs with NPM

```bash
  npm install pkmonjs
  cd your-project
```

or Yarn

```bash
  yanr add pkmonjs
  cd your-project
```

## Demonstration

Enter a pokemon name will receive an object as a response

JavaScript

```JS

    const {getPokemon} = require('pkmonjs')

    const poke = getPokemon('pikachu')
    .then((f)=>
    {
    if(f) console.log(f)
    })

```

TypeScript

```TS

    import getPokemon from 'pkmonjs'

    const poke = getPokemon('pikachu')
    .then((f)=>
    {
    if(f) console.log(f)
    })
```

Response Exemple

```JS
  {
  idPokedex: 1,
  name: 'bulbasaur',
  description: 'While it is young, it uses the nutrients that are stored in the seed on its back in order to grow.',
  sexMalePorcentage: 100,
  sexFemalePorcentage: 0,
  undefinedPorcentage: 0,
  stats: {
    hp: 45,
    attack: 49,
    defense: 49,
    specialAttack: 65,
    specialDefense: 65,
    speed: 45,
    height: 7,
    weight: 69,
    types: { name: [Object], weakness: [Object] }
  },
  image: {
    default: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    UrlMaleOrUndefined: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    UrlShiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png'
  },
  color: { name: 'green', url: 'https://pokeapi.co/api/v2/pokemon-color/5/' },
  habitat: {
    name: 'grassland',
    url: 'https://pokeapi.co/api/v2/pokemon-habitat/3/'
  },
  generation: {
    name: 'generation-i',
    url: 'https://pokeapi.co/api/v2/generation/1/'
  }
}

```
