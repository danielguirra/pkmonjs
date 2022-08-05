"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const pokedex_1 = require("./pokedex");
exports.test = (0, pokedex_1.getPokemon)(25).then((f) => {
    if (f) {
        console.log('Thanks For Install PkmonJs !!!😁');
    }
    else {
        console.log('Erro in install');
    }
});
