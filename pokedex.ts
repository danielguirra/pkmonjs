import axios from 'axios';
import { JSDOM } from 'jsdom';

import { getPokemonSpecies } from './getPokemonSpecies';
import { getPokemonUrlImages } from './getPokemonUrlImages';
import { getPokemonWeakeanes } from './getPokemonWeakeanes';
import { Pokemon, PokemonStatus } from './src/interfaces/Pokemon';

export async function getPokemon(pokemonName: string | number) {
  const pokeGet = await axios.get(
    'https://pokeapi.co/api/v2/pokemon/' + pokemonName,
  )
  const data = pokeGet.data
  const pokemonTypes = {
    types: data.types,
  }
  let weak
  if (pokemonTypes.types.length > 1)
    weak = await getPokemonWeakeanes({
      type1: pokemonTypes.types[0].type,
      type2: pokemonTypes.types[1].type,
    })
  else {
    weak = await getPokemonWeakeanes({ type1: pokemonTypes.types[0].type })
  }

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
