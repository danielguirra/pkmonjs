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
exports.getPokemonSpecies = void 0;
const axios_1 = __importDefault(require("axios"));
const pokemonGenderRatio_1 = require("./pokemonGenderRatio");
function getPokemonSpecies(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const get = yield axios_1.default.get(url);
        const color = get.data.color;
        const eggGroup = get.data.egg_groups;
        if (get.data.gender_rate === -1)
            get.data.gender_rate = 7;
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
    });
}
exports.getPokemonSpecies = getPokemonSpecies;
