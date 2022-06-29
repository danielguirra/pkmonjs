"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonUrlImages = void 0;
function getPokemonUrlImages(pokemon) {
    let image;
    const defaultFront = pokemon.sprites.front_default;
    const defaultShinyFront = pokemon.sprites.front_shiny;
    let num = pokemon.id;
    if (num.length < 2)
        num = '00' + num;
    if (num.length > 1 && num.length < 3)
        num = '0' + num;
    if (pokemon.sprites.front_female != null) {
        const femaleFront = pokemon.sprites.front_female;
        const femaleShinyFront = pokemon.sprites.front_shiny_female;
        image = {
            default: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`,
            UrlMaleOrUndefined: defaultFront,
            UrlShiny: defaultShinyFront,
            UrlFemale: femaleFront,
            UrlShinyFemale: femaleShinyFront,
        };
        return image;
    }
    image = {
        default: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`,
        UrlMaleOrUndefined: defaultFront,
        UrlShiny: defaultShinyFront,
    };
    return image;
}
exports.getPokemonUrlImages = getPokemonUrlImages;
