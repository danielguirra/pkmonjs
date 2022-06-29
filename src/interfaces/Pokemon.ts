export interface PokemonStatus {
  hp: string
  attack: string
  defense: string
  specialAttack: string
  specialDefense: string
  speed: string
  height: string
  weight: string
  types: PokemonTypeArray | PokemonType | PokemonTypesWeakeness
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
  name: string
  weakness: string | Array<string>
}

export interface Pokemon {
  idPokedex: string
  name: string

  color: PokemonColor
  habitat: PokemonHabitat
  generation: PokemonGeneration

  sexMalePorcentage: string | number
  sexFemalePorcentage: string | number
  undefinedPorcentage: string | number

  stats: PokemonStatus
  image: PokemonImage
}

export interface PokemonTypesWeakeness {
  name: string | Array<string>

  damageDoubleFrom: string | Array<string>
  damageDoubleTo: string | Array<string>

  halfDamageFrom: string | Array<string>
  halfDamageTo: string | Array<string>

  noDamageFrom: string | Array<string>
  noDamegeTo: string | Array<string>
}
