/**
 * Created by Henke on 2018-03-18.
 */

import {Action} from '@ngrx/store';

export const ATTACK = 'ATTACK';
export const DEFEND = 'DEFEND';

const defaultState = {
  hero: {
    hp: 100,
    ap: 10,
    st: 10
  },
  enemy: {
    hp: 50,
    ap: 15,
    st: 5
  }
};

export const attack = (state = defaultState, action) => {
  switch (action.type) {
    case ATTACK:
      const attacker = state[action.payload.attacker];
      const defender = state[action.payload.defender];
      return {
        ...state,
        [action.payload.defender]: {...defender, hp: defender.hp - calculateAttack(attacker.ap, defender.st)}
      };
    default:
      return state;
  }
};

export const defend = (state = defaultState, action: Action) => {
  switch (action.type) {
    case DEFEND:
      console.log('defending!!!');
      return state;
    default:
      return state;
  }
};

const diceThrow = (nbrOfSides = 20) => {
  return Math.floor((Math.random() * nbrOfSides) + 1);
};

const calculateAttack = (attackerAP, defenderArmor) => {
  const attackerAttackValue = attackerAP + diceThrow();
  const defenderDefendValue = defenderArmor + diceThrow();
  const result = attackerAttackValue - defenderDefendValue;
  return result > 0 ? result : 0;
};
