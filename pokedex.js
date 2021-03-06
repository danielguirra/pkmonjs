"use strict";
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
exports.getPokemon = void 0;
const axios_1 = __importDefault(require("axios"));
const jsdom_1 = require("jsdom");
const getPokemonSpecies_1 = require("./getPokemonSpecies");
const getPokemonUrlImages_1 = require("./getPokemonUrlImages");
const getPokemonWeakeanes_1 = require("./getPokemonWeakeanes");
function getPokemon(pokemonName) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const pokeGet = yield axios_1.default.get('https://pokeapi.co/api/v2/pokemon/' + pokemonName);
        const data = pokeGet.data;
        const pokemonTypes = {
            types: data.types,
        };
        let weak;
        if (pokemonTypes.types.length > 1)
            weak = yield (0, getPokemonWeakeanes_1.getPokemonWeakeanes)({
                type1: pokemonTypes.types[0].type,
                type2: pokemonTypes.types[1].type,
            });
        else {
            weak = yield (0, getPokemonWeakeanes_1.getPokemonWeakeanes)({ type1: pokemonTypes.types[0].type });
        }
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
        let curiosity = dom.window.document.querySelector('p').textContent.trim();
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
    });
}
exports.getPokemon = getPokemon;
