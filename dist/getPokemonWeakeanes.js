"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonWeakeanes = void 0;
const axios_1 = require("axios");
const mergeObjc_1 = require("./mergeObjc");
async function getPokemonWeakeanes(types) {
    let type1 = types[0].type;
    let type2;
    let names = {
        type1: "",
    };
    let weakness1;
    if (type1.url) {
        weakness1 = await axios_1.default.get(type1.url);
        names.type1 = type1.name;
    }
    let weakness2;
    if (types[1] && types[1].type.url) {
        weakness2 = await axios_1.default.get(types[1].type.url);
        type2 = types[1].type;
        names.type2 = type2.name;
    }
    else {
        weakness2 = weakness1;
        type2 = undefined;
        names.type2 = type2;
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
}
exports.getPokemonWeakeanes = getPokemonWeakeanes;
//# sourceMappingURL=getPokemonWeakeanes.js.map