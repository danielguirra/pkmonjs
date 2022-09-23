"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPokemon = exports.getAllPokemonNames = exports.getPokemon = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const jsdom_1 = require("jsdom");
const getPokemonSpecies_1 = require("./getPokemonSpecies");
const getPokemonUrlImages_1 = require("./getPokemonUrlImages");
const getPokemonWeakeanes_1 = require("./getPokemonWeakeanes");
const pokekex = __importStar(require("./src/data/pokedex.json"));
const pokedexNames_json_1 = __importDefault(require("./src/data/pokedexNames.json"));
function getPokemon(pokemonName) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        try {
            data = JSON.parse(fs_1.default.readFileSync("./src/data/pokedex.json", "utf-8"));
            let dataFind = data.find((pokeany) => pokeany.idPokedex === pokemonName || pokeany.name === pokemonName);
            return dataFind;
        }
        catch (error) {
            const pokeGet = yield axios_1.default.get("https://pokeapi.co/api/v2/pokemon/" + pokemonName);
            data = pokeGet.data;
            const pokemonTypes = data.types;
            let weak = yield (0, getPokemonWeakeanes_1.getPokemonWeakeanes)(pokemonTypes);
            if (weak) {
                const stats = data.stats;
                const pokemonStatus = {
                    hp: stats[0].base_stat,
                    attack: stats[1].base_stat,
                    defense: stats[2].base_stat,
                    specialAttack: stats[3].base_stat,
                    specialDefense: stats[4].base_stat,
                    speed: stats[5].base_stat,
                    height: data.height,
                    weight: data.weight,
                    types: weak,
                };
                const pokemonImages = (0, getPokemonUrlImages_1.getPokemonUrlImages)(data);
                const specie = yield (0, getPokemonSpecies_1.getPokemonSpecies)(data.species.url);
                const url = `https://www.pokemon.com/br/pokedex/${data.id}`;
                const response = yield axios_1.default.get(url);
                const dom = new jsdom_1.JSDOM(response.data);
                let curiosity = dom.window.document.querySelector("p").textContent.trim();
                const pokemon = {
                    idPokedex: data.id,
                    name: data.name,
                    description: curiosity,
                    sexMalePorcentage: (_a = specie.genderRate) === null || _a === void 0 ? void 0 : _a.male,
                    sexFemalePorcentage: (_b = specie.genderRate) === null || _b === void 0 ? void 0 : _b.female,
                    undefinedPorcentage: (_c = specie.genderRate) === null || _c === void 0 ? void 0 : _c.undefined,
                    stats: pokemonStatus,
                    image: pokemonImages,
                    color: specie.color,
                    habitat: specie.habitat,
                    generation: specie.generation,
                };
                return pokemon;
            }
        }
    });
}
exports.getPokemon = getPokemon;
function getAllPokemonNames() {
    const poke = pokedexNames_json_1.default;
    const pokes = poke;
    return pokes;
}
exports.getAllPokemonNames = getAllPokemonNames;
function getAllPokemon() {
    const poke = pokekex;
    const pokes = poke;
    return pokes;
}
exports.getAllPokemon = getAllPokemon;
