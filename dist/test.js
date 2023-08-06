"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pokedex_1 = require("./pokedex");
(0, pokedex_1.getPokemon)(1).then((f) => {
    if (f) {
        console.log("Thanks For Install PkmonJs !!!😁");
    }
    else {
        console.log("Erro in install");
    }
});
//# sourceMappingURL=test.js.map