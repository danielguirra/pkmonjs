import axios from 'axios';

import { pokemonGenderRatio } from './pokemonGenderRatio';
import {
  PokemonColor,
  PokemonEggGroupArray,
  PokemonGenderRatio,
  PokemonGeneration,
  PokemonHabitat,
  PokemonSpecie,
} from './src/interfaces/Pokemon';

export async function getPokemonSpecies(url: string) {
  const get = await axios.get(url)
  const color: PokemonColor = get.data.color
  const eggGroup: PokemonEggGroupArray = get.data.egg_groups
  if (get.data.gender_rate === -1) get.data.gender_rate = 7
  const genderRate: PokemonGenderRatio =
    pokemonGenderRatio[get.data.gender_rate]
  const isLegendary: boolean = get.data.is_legendary
  const isMythical: boolean = get.data.is_mythical
  const isBaby: boolean = get.data.is_baby
  const habitat: PokemonHabitat = get.data.habitat
  const generation: PokemonGeneration = get.data.generation

  const response: PokemonSpecie = {
    color,
    eggGroup,
    genderRate,
    isLegendary,
    isMythical,
    isBaby,
    habitat,
    generation,
  }

  return response
}
