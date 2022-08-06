# PkmonJs
============
[![npm](https://img.shields.io/npm/v/pokemon-gif.svg)](https://www.npmjs.com/package/pkmonjs)
[![npm](https://img.shields.io/npm/dt/pokemon-gif.svg)](https://www.npmjs.com/package/pkmonjs)
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

    const {getPokemon,getAllPokemon,getAllPokemonNames} = require('pkmonjs')

    const poke = getPokemon('pikachu').then((f)=>
     {
        if(f) {
          console.log(f)
        }
     }
    )
    //or use await
    const poke =await getPokemon('pikachu')

    const names=await getAllPokemonNames()

    const pokes=await getAllPokemonNames()

```

TypeScript

```TS

    import {
      getPokemon,
      getAllPokemon,
      getAllPokemonNames,
      Pokemon,
      PokemonNamesArray,
      PokemonArray }
    from 'pkmonjs';

    const poke:Pokemon = getPokemon('pikachu').then((f)=>
     {
        if(f) {
          console.log(f)
        }
     }
    )
    //or use await
    const poke:Pokemon =await getPokemon('pikachu')

    const names:PokemonNamesArray=await getAllPokemonNames()

    const pokes:PokemonArray=await getAllPokemonNames()
```

Response Exemple

```JS

    Pokemon{
        idPokedex: 1,
        name: 'bulbasaur',
        description: 'While it is young, it uses the nutrients that are stored in the seed on its back in order to grow.',
        sexMalePorcentage: 85,
        sexFemalePorcentage: 15,
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
          types: {
            name: [Array],
            weakness: [Object]
            }
        },
        image: {
          default: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
            UrlMaleOrUndefined: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            UrlShiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png'
        },
        color: {
          name: 'green',
          url: 'https://pokeapi.co/api/v2/pokemon-color/5/'
          },
        habitat: {
          name: 'grassland',
          url: 'https://pokeapi.co/api/v2/pokemon-habitat/3/'
        },
        generation: {
          name: 'generation-i',
          url: 'https://pokeapi.co/api/v2/generation/1/'
        }
}

  Names{
      { "idPokedex": 1, "pokemonName": "bulbasaur" },
      { "idPokedex": 2, "pokemonName": "ivysaur" },
      { "idPokedex": 3, "pokemonName": "venusaur" },
      { "idPokedex": 4, "pokemonName": "charmander" },
      ...
  }

  Pokemons{
    Pokemon,
    Pokemon,
    Pokemon
    ...
  }

```
