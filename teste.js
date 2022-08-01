'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const pokedex_1 = require('./pokedex')
;(0, pokedex_1.getPokemon)('rayquaza').then((f) => {
  if (f) {
    console.log(f)
  }
})
