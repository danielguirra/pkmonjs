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
exports.getPokemonWeakeanes = void 0;
const axios_1 = __importDefault(require("axios"));
const mergeObjc_1 = require("./mergeObjc");
function getPokemonWeakeanes(types) {
    return __awaiter(this, void 0, void 0, function* () {
        let type1 = types[0].type;
        let type2;
        let names = [];
        let weakness1;
        if (type1.url) {
            weakness1 = yield axios_1.default.get(type1.url);
            names.push(type1.name);
        }
        let weakness2;
        if (types[1] && types[1].type.url) {
            weakness2 = yield axios_1.default.get(types[1].type.url);
            type2 = types[1].type;
            names.push(type2.name);
        }
        else {
            weakness2 = weakness1;
            type2 = null;
        }
        if (weakness1) {
            const pokeWeak1 = {
                damageDoubleFrom: weakness1.data.damage_relations.double_damage_from,
                damageDoubleTo: weakness1.data.damage_relations.double_damage_to,
                halfDamageFrom: weakness1.data.damage_relations.half_damage_from,
                halfDamageTo: weakness1.data.damage_relations.half_damage_to,
                noDamageFrom: weakness1.data.damage_relations.no_damage_from,
                noDamegeTo: weakness1.data.damage_relations.no_damage_to,
            };
            let pokeWeak2 = pokeWeak1;
            if (weakness2) {
                pokeWeak2 = {
                    damageDoubleFrom: weakness2.data.damage_relations.double_damage_from,
                    damageDoubleTo: weakness2.data.damage_relations.double_damage_to,
                    halfDamageFrom: weakness2.data.damage_relations.half_damage_from,
                    halfDamageTo: weakness2.data.damage_relations.half_damage_to,
                    noDamageFrom: weakness2.data.damage_relations.no_damage_from,
                    noDamegeTo: weakness2.data.damage_relations.no_damage_to,
                };
            }
            const finalWeak = {
                damageDoubleFrom: (0, mergeObjc_1.mergeObjc)(pokeWeak1.damageDoubleFrom, pokeWeak2.damageDoubleFrom),
                damageDoubleTo: (0, mergeObjc_1.mergeObjc)(pokeWeak1.damageDoubleTo, pokeWeak2.damageDoubleTo),
                halfDamageFrom: (0, mergeObjc_1.mergeObjc)(pokeWeak1.halfDamageFrom, pokeWeak2.halfDamageFrom),
                halfDamageTo: (0, mergeObjc_1.mergeObjc)(pokeWeak1.halfDamageTo, pokeWeak2.halfDamageTo),
                noDamageFrom: (0, mergeObjc_1.mergeObjc)(pokeWeak1.noDamageFrom, pokeWeak2.noDamageFrom),
                noDamegeTo: (0, mergeObjc_1.mergeObjc)(pokeWeak1.noDamegeTo, pokeWeak2.noDamegeTo),
            };
            if (names) {
                const finaltypes = {
                    name: names,
                    weakness: finalWeak,
                };
                return finaltypes;
            }
        }
    });
}
exports.getPokemonWeakeanes = getPokemonWeakeanes;
