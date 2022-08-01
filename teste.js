"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pokedex_1 = require("./pokedex");
(0, pokedex_1.getPokemon)(25).then((f) => {
    if (f) {
        console.log(f.stats.types.name.type2);
    }
});
