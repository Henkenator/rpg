/**
 * Created by Henke on 2018-03-18.
 */

import {Action} from '@ngrx/store';

export const HERO_ATTACK = 'HERO_ATTACK';
export const ENEMY_ATTACK = 'ENEMY_ATTACK';
export const HERO_DEFEND = 'HERO_DEFEND';
export const DEFEND = 'DEFEND';
export const ENEMY_DEFEND = 'ENEMY_DEFEND';

const defaultState = {
  heroHealthPoints: 100,
  heroAttackPoints: 10,
  heroArmor: 10,
  enemyHealthPoints: 50,
  enemyAttackPoints: 10,
  enemyArmor: 5
};

export function attack(state = defaultState, action: Action) {
  switch (action.type) {
    case HERO_ATTACK:
      /*const heroAttackValue = state.heroAttackPoints + diceThrow();
      const enemyDefendValue = state.enemyArmor + diceThrow();
      const heroAttackResult = heroAttackValue - enemyDefendValue;
      return {
        ...state,
        enemyHealthPoints: state.enemyHealthPoints - (heroAttackResult > 0 ? heroAttackResult : 0)
      };*/

     return {
     ...state,
     enemyHealthPoints: state.enemyHealthPoints - calculateAttack(state.heroAttackPoints, state.enemyArmor)
     };
    case ENEMY_ATTACK:
      const enemyAttackValue = state.enemyAttackPoints + diceThrow();
      const heroDefendValue = state.heroArmor + diceThrow();
      const enemyAttackResult = enemyAttackValue - heroDefendValue;
      return {
        ...state,
        heroHealthPoints: state.heroHealthPoints - (enemyAttackResult > 0 ? enemyAttackResult : 0)
      };
    /*case HERO_DEFEND:
      //return diceThrow();
      return state;*/
    default:
      return state;
  }
}

export function defend(state = defaultState, action: Action) {
  switch (action.type) {
    case DEFEND:
      console.log('defending!!!');
      return state;
    default:
      return state;
  }
}

function diceThrow(nbrOfSides = 20) {
  return Math.floor((Math.random() * nbrOfSides) + 1);
}

function calculateAttack(attackerAP, defenderArmor) {
  const attackerAttackValue = attackerAP + diceThrow();
  const defenderDefendValue = defenderArmor + diceThrow();
  const result = attackerAttackValue - defenderDefendValue;
  return result > 0 ? result : 0;
}
