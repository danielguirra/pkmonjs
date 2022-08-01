import axios from 'axios';

import { mergeObjc } from './mergeObjc';
import { PokemonType, PokemonTypeSlot, PokemonTypesWeakeness } from './src/interfaces/Pokemon';

export async function getPokemonWeakeanes(types: Array<PokemonTypeSlot>) {
  let type1 = types[0].type
  let type2
  let names: any = {
    type1: '',
  }
  let weakness1
  if (type1.url) {
    weakness1 = await axios.get(type1.url)
    names.type1 = type1.name
  }
  let weakness2
  if (types[1] && types[1].type.url) {
    weakness2 = await axios.get(types[1].type.url)
    type2 = types[1].type
    names.type2 = type2.name
  } else {
    weakness2 = weakness1
    type2 = undefined
    names.type2 = type2
  }
  if (weakness1) {
    const pokeWeak1: PokemonTypesWeakeness = {
      damageDoubleFrom: weakness1.data.damage_relations.double_damage_from,
      damageDoubleTo: weakness1.data.damage_relations.double_damage_to,
      halfDamageFrom: weakness1.data.damage_relations.half_damage_from,
      halfDamageTo: weakness1.data.damage_relations.half_damage_to,
      noDamageFrom: weakness1.data.damage_relations.no_damage_from,
      noDamegeTo: weakness1.data.damage_relations.no_damage_to,
    }
    let pokeWeak2: PokemonTypesWeakeness = pokeWeak1
    if (weakness2) {
      pokeWeak2 = {
        damageDoubleFrom: weakness2.data.damage_relations.double_damage_from,
        damageDoubleTo: weakness2.data.damage_relations.double_damage_to,
        halfDamageFrom: weakness2.data.damage_relations.half_damage_from,
        halfDamageTo: weakness2.data.damage_relations.half_damage_to,
        noDamageFrom: weakness2.data.damage_relations.no_damage_from,
        noDamegeTo: weakness2.data.damage_relations.no_damage_to,
      }
    }

    const finalWeak: PokemonTypesWeakeness = {
      damageDoubleFrom: mergeObjc(
        pokeWeak1.damageDoubleFrom,
        pokeWeak2.damageDoubleFrom,
      ),
      damageDoubleTo: mergeObjc(
        pokeWeak1.damageDoubleTo,
        pokeWeak2.damageDoubleTo,
      ),
      halfDamageFrom: mergeObjc(
        pokeWeak1.halfDamageFrom,
        pokeWeak2.halfDamageFrom,
      ),
      halfDamageTo: mergeObjc(pokeWeak1.halfDamageTo, pokeWeak2.halfDamageTo),
      noDamageFrom: mergeObjc(pokeWeak1.noDamageFrom, pokeWeak2.noDamageFrom),
      noDamegeTo: mergeObjc(pokeWeak1.noDamegeTo, pokeWeak2.noDamegeTo),
    }

    if (names) {
      const finaltypes: PokemonType = {
        name: names,
        weakness: finalWeak,
      }
      return finaltypes
    }
  }
}
