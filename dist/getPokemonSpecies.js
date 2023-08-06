"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonSpecies = void 0;
const axios_1 = require("axios");
const pokemonGenderRatio_1 = require("./pokemonGenderRatio");
async function getPokemonSpecies(url) {
    const get = await axios_1.default.get(url);
    const color = get.data.color;
    const eggGroup = get.data.egg_groups;
    if (get.data.gender_rate === -1)
        get.data.gender_rate = 9;
    const genderRate = pokemonGenderRatio_1.pokemonGenderRatio[get.data.gender_rate];
    const isLegendary = get.data.is_legendary;
    const isMythical = get.data.is_mythical;
    const isBaby = get.data.is_baby;
    const habitat = get.data.habitat;
    const generation = get.data.generation;
    const response = {
        color,
        eggGroup,
        genderRate,
        isLegendary,
        isMythical,
        isBaby,
        habitat,
        generation,
    };
    return response;
}
exports.getPokemonSpecies = getPokemonSpecies;
//# sourceMappingURL=getPokemonSpecies.js.map