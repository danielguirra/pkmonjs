"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPokemon = exports.getAllPokemonNames = exports.getPokemon = void 0;
const axios_1 = require("axios");
const fs_1 = require("fs");
const jsdom_1 = require("jsdom");
const getPokemonSpecies_1 = require("./getPokemonSpecies");
const getPokemonUrlImages_1 = require("./getPokemonUrlImages");
const getPokemonWeakeanes_1 = require("./getPokemonWeakeanes");
async function getPokemon(pokemonName) {
    var _a, _b, _c;
    let data;
    const pokeGet = await axios_1.default.get("https://pokeapi.co/api/v2/pokemon/" + pokemonName);
    data = pokeGet.data;
    const pokemonTypes = data.types;
    let weak = await (0, getPokemonWeakeanes_1.getPokemonWeakeanes)(pokemonTypes);
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
        const specie = await (0, getPokemonSpecies_1.getPokemonSpecies)(data.species.url);
        const url = `https://www.pokemon.com/br/pokedex/${data.id}`;
        const response = await axios_1.default.get(url);
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
exports.getPokemon = getPokemon;
async function getAllPokemonNames() {
    let poke;
    try {
        poke = JSON.parse((0, fs_1.readFileSync)("./node_modules/pkmonjs/data/pokedexNames.json", "utf-8"));
    }
    catch (error) {
        poke = JSON.parse((0, fs_1.readFileSync)("./data/pokedexNames.json", "utf-8"));
    }
    const pokes = poke;
    return pokes;
}
exports.getAllPokemonNames = getAllPokemonNames;
async function getAllPokemon() {
    let limit = await axios_1.default.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1");
    const data = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit.data.count}`);
    const pokes = data.data;
    return pokes;
}
exports.getAllPokemon = getAllPokemon;
//# sourceMappingURL=pokedex.js.map