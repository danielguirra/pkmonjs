import { Pokemon, PokemonArray, PokemonNamesArray } from './interfaces/Pokemon';
export declare function getPokemon(pokemonName: string | number): Promise<Pokemon>;
export declare function getAllPokemonNames(): Promise<PokemonNamesArray>;
export declare function getAllPokemon(): Promise<PokemonArray>;
