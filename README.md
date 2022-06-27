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
  idPokedex: 25,
  name: 'pikachu',
  sexMalePorcentage: 50,
  sexFemalePorcentage: 50,
  undefinedPorcentage: 0,
  stats: {
    hp: 35,
    attack: 55,
    defense: 40,
    specialAttack: 50,
    specialDefense: 50,
    speed: 90,
    height: 4,
    weight: 60,
    types: {
      damageDoubleFrom: [Array],
      damageDoubleTo: [Array],
      halfDamageFrom: [Array],
      halfDamageTo: [Array],
      noDamageFrom: [],
      noDamegeTo: [Array]
    }
  },
  image: {
    UrlMaleOrUndefined: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    UrlShiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
    UrlFemale: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png',
    UrlShinyFemale: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png'
  },
  color: {
    name: 'yellow',
    url: 'https://pokeapi.co/api/v2/pokemon-color/10/'
  },
  habitat: {
    name: 'forest',
    url: 'https://pokeapi.co/api/v2/pokemon-habitat/2/'
  },
  generation: {
    name: 'generation-i',
    url: 'https://pokeapi.co/api/v2/generation/1/'
  }
}

```
