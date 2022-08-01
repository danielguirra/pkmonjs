export interface PokemonStatus {
  hp: string
  attack: string
  defense: string
  specialAttack: string
  specialDefense: string
  speed: string
  height: string
  weight: string
  types: PokemonType | PokemonTypeC
}
export interface PokemonGenderRatio {
  male: number
  female: number
  undefined: number
}

export interface PokemonEggGroup {
  name: string
  url: string
}

export interface PokemonSpecie {
  color: PokemonColor
  eggGroup: PokemonEggGroupArray
  genderRate: PokemonGenderRatio
  isLegendary: boolean
  isMythical: boolean
  isBaby: boolean
  habitat: PokemonHabitat
  generation: PokemonGeneration
}

export interface PokemonEggGroupArray {
  groups: Array<PokemonEggGroup>
}
export interface PokemonColor {
  name: string
  url: string
}

export interface PokemonHabitat {
  name: string
  url: string
}

export interface PokemonGeneration {
  name: string
  url: string
}
export interface PokemonImage {
  default: string

  UrlMaleOrUndefined: string
  UrlShiny: string

  UrlFemale?: string
  UrlShinyFemale?: string
}

export interface PokemonTypeArray {
  types: Array<PokemonType>
}

export interface PokemonType {
  name: PokemonTypeNames
  weakness: PokemonTypesWeakeness
  url?: string
}
export interface PokemonTypeC {
  name: Array<PokemonTypeNames>
  weakness: PokemonTypesWeakeness
  url?: string
}
export interface PokemonTypeSlot {
  slot: string
  type: PokemonType
}

export interface Pokemon {
  idPokedex: string
  name: string
  description: string
  color: PokemonColor
  habitat: PokemonHabitat
  generation: PokemonGeneration

  sexMalePorcentage: string | number | undefined
  sexFemalePorcentage: string | number | undefined
  undefinedPorcentage: string | number | undefined

  stats: PokemonStatus
  image: PokemonImage
}

export interface PokemonTypesWeakeness {
  damageDoubleFrom: string | Array<string>
  damageDoubleTo: string | Array<string>

  halfDamageFrom: string | Array<string>
  halfDamageTo: string | Array<string>

  noDamageFrom: string | Array<string>
  noDamegeTo: string | Array<string>
}

export interface PokemonTypeNames {
  type1: string
  type2?: string
}

export interface PokemonNamesArray {
  poke: Array<PokemonNames>
}
export interface PokemonArray {
  poke: Array<Pokemon>
}

export interface PokemonNames {
  idPokedex: string
  pokemonName: string
}
