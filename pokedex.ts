import axios from 'axios';
import fs from 'fs';
import { JSDOM } from 'jsdom';

import { getPokemonSpecies } from './getPokemonSpecies';
import { getPokemonUrlImages } from './getPokemonUrlImages';
import { getPokemonWeakeanes } from './getPokemonWeakeanes';
import { Pokemon, PokemonArray, PokemonNamesArray, PokemonStatus, PokemonTypeSlot } from './src/interfaces/Pokemon';

export async function getPokemon(pokemonName: string | number) {
  let data
  try {
    data = JSON.parse(fs.readFileSync('./src/data/pokedex.json', 'utf-8'))
    let dataFind = data.find(
      (pokeany: Pokemon) =>
        pokeany.idPokedex === pokemonName || pokeany.name === pokemonName,
    )

    return dataFind
  } catch (error) {
    const pokeGet = await axios.get(
      'https://pokeapi.co/api/v2/pokemon/' + pokemonName,
    )
    data = pokeGet.data
    fs.writeFileSync('cache.json', JSON.stringify(data), 'utf-8')
    const pokemonTypes: Array<PokemonTypeSlot> = data.types
    let weak = await getPokemonWeakeanes(pokemonTypes)

    const stats = data.stats

    const pokemonStatus: PokemonStatus = {
      hp: stats[0].base_stat,
      attack: stats[1].base_stat,
      defense: stats[2].base_stat,
      specialAttack: stats[3].base_stat,
      specialDefense: stats[4].base_stat,
      speed: stats[5].base_stat,
      height: data.height,
      weight: data.weight,
      types: weak,
    }

    const pokemonImages = getPokemonUrlImages(data)
    const specie = await getPokemonSpecies(data.species.url)
    const url = `https://www.pokemon.com/br/pokedex/${data.id}`
    const response = await axios.get(url)
    const dom: any = new JSDOM(response.data)
    let curiosity = dom.window.document.querySelector('p').textContent.trim()
    const pokemon: Pokemon = {
      idPokedex: data.id,
      name: data.name,
      description: curiosity,
      sexMalePorcentage: specie.genderRate?.male,
      sexFemalePorcentage: specie.genderRate?.female,
      undefinedPorcentage: specie.genderRate?.undefined,
      stats: pokemonStatus,
      image: pokemonImages,
      color: specie.color,
      habitat: specie.habitat,
      generation: specie.generation,
    }

    return pokemon
  }
}

function poke(poke: any, arg1: (any: any) => any): any {
  throw new Error('Function not implemented.')
}

export function getAllPokemonNames() {
  const poke: PokemonNamesArray = JSON.parse(
    fs.readFileSync('./src/data/pokedexNames.json', 'utf-8'),
  )

  return poke
}

export function getAllPokemon() {
  const poke: PokemonArray = JSON.parse(
    fs.readFileSync('./src/data/pokedex.json', 'utf-8'),
  )

  return poke
}
