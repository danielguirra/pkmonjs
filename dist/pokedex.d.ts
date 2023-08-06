import { Pokemon, PokemonNames } from './interfaces/Pokemon';
export declare function getPokemon(pokemonName: string | number): Promise<Pokemon>;
export declare function getAllPokemonNames(): Promise<PokemonNames[]>;
export declare function getAllPokemon(): Promise<any>;
