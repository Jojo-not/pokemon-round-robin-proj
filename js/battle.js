"use strict";

import * as pokemonEnum from "./pokemonEnums.js";
import * as trainers from "./trainer.js";
import * as pokemons from "./pokemons.js";

let numberOfRounds;
const actions = ["attack", "defend", "parry"];
const weightedActions = [
  "attack",
  // "attack",
  "defend",
  // "defend",
  "parry",
  "parry",
  // "recover",
];
const actionMatrix = {
  attack: {
    attack: "both damaged",
    defend: "win",
    parry: "lose",
    recover: "win",
  },
  defend: { attack: "lose", defend: "tie", parry: "win", recover: "tie" },
  parry: {
    attack: "win",
    defend: "lose",
    parry: "both damaged",
    recover: "win",
  },
  recover: { attack: "lose", defend: "tie", parry: "lose", recover: "tie" },
};

function computeDamage(basePower, bias, matchupMultiplier, typeMultiplier) {
  return basePower * bias * matchupMultiplier * typeMultiplier;
}

export function getTypeEffectiveness(attackerType, defenderType) {
  const typeObj = pokemonEnum.pokemonTypeChart.find(
    (x) => x.type === attackerType
  );

  return typeObj?.multipliers?.[defenderType] ?? 1;
}

export function getMatchupMultiplier(playerMove, opponentMove) {
  // console.log(
  //   "Match-up Multipliers:",
  //   pokemonEnum.matchup,
  //   "Player Move:",
  //   playerMove,
  //   "Opponent Move:",
  //   opponentMove
  // );

  return pokemonEnum.matchup[playerMove]?.[opponentMove] ?? 0;
}

export function getBiasMultiplier(
  playerMove,
  playerPokemon,
  opponentMove,
  opponentPokemon
) {
  const playerBias = playerPokemon.bias[playerMove] ?? 1.0;
  const opponentBias = opponentPokemon.bias[opponentMove] ?? 1.0;
  return playerBias / opponentBias;
}

export function setNumberOfRounds(numberOfOpponents) {
  numberOfRounds = numberOfOpponents;
}

export function getNumberOfRounds() {
  return numberOfRounds;
}

export function scheduleRounds(numPlayers) {
  let schedule = [];
  let players = [...Array(numPlayers).keys()];

  for (let round = 0; round < numPlayers - 1; round++) {
    for (let i = 0; i < numPlayers / 2; i++) {
      let home = players[i];
      let away = players[numPlayers - 1 - i];
      schedule.push({ round: round + 1, match: [home, away] });
    }
    players.splice(1, 0, players.pop());
  }
  return schedule;
}

export function evaluateAction(playerAction) {
  const opponentAction = generateEnemyAttack();
  // console.log("Opponent's action:", opponentAction);

  const result = actionMatrix[playerAction]?.[opponentAction] ?? "invalid";
  // console.log("Evaluate Action Result: ", result);

  return {
    playerAction,
    opponentAction,
    result,
  };
}

export function generateEnemyAttack() {
  return weightedActions[Math.floor(Math.random() * actions.length)];
}

export function evaluateTurn(player, opponent, playerActionResult) {
  const { playerAction, opponentAction, result } = playerActionResult;

  const playerPokemon = player.pokemon;
  const opponentPokemon = opponent.pokemon;

  // Base power can be fixed or dynamic — here we use 10
  const basePower = 10;

  const typeMultiplier = getTypeEffectiveness(
    playerPokemon.pokemonType[0],
    opponentPokemon.pokemonType[0]
  );

  const matchupMultiplier = getMatchupMultiplier(playerAction, opponentAction);

  const biasMultiplier = getBiasMultiplier(
    playerAction,
    player.pokemon,
    opponentAction,
    opponent.pokemon
  );

  const damage = Math.floor(
    computeDamage(basePower, biasMultiplier, matchupMultiplier, typeMultiplier)
  );

  console.log(
    "bias:",
    biasMultiplier,
    "match multiplier:",
    matchupMultiplier,
    "type multiplier:",
    typeMultiplier
  );

  if (result === "win") {
    opponentPokemon.health -= damage;
  } else if (result === "lose") {
    playerPokemon.health -= damage;
  } else if (result === "both damaged") {
    opponentPokemon.health -= damage;
    playerPokemon.health -= damage;
  }

  playerPokemon.health = Math.max(0, playerPokemon.health);
  opponentPokemon.health = Math.max(0, opponentPokemon.health);

  console.log(
    "player's attack:",
    playerAction,
    "player health:",
    playerPokemon.health
  );

  console.log(
    "opponent's attack:",
    opponentAction,
    "opponent health:",
    opponentPokemon.health,
    "result:",
    result,
    "Damage:",
    damage
  );

  return {
    player,
    opponent,
    damage,
  };
}

export function evaluateRound(round, player) {
  const results = [];

  for (const match of round.matches) {
    const { trainerA, trainerB } = match;

    const isPlayerMatch =
      trainerA.id === player.id || trainerB.id === player.id;

    if (isPlayerMatch) {
      results.push({
        trainerA,
        trainerB,
        result: "pending",
        turns: [],
      });
    } else {
      const result = simulateAIBattle(trainerA, trainerB);
      results.push(result);
    }
  }

  return results;
}

export function evaluatePlayerBattle(player, opponent, playerAction) {
  const opponentAction = generateEnemyAttack();

  // console.log("Player Log:", player);
  // console.log("Opponent Log:", opponent);

  const result = actionMatrix[playerAction]?.[opponentAction] ?? "invalid";

  const actionResult = {
    playerAction,
    opponentAction,
    result,
  };

  const turnOutcome = evaluateTurn(player, opponent, actionResult);

  const battleResult = {
    player: turnOutcome.player,
    opponent: turnOutcome.opponent,
    result,
    playerAction,
    opponentAction,
    playerHP: turnOutcome.player.pokemon.health,
    opponentHP: turnOutcome.opponent.pokemon.health,
    damage: turnOutcome.damage,
  };

  // console.log("Battle Result:", result);

  if (result.playerHP <= 0) {
    console.log("You lost!");
    // score.addRoundLoss(player.playerName);
    // score.addRoundWin(opponent.playerName);
  } else if (result.opponentHP <= 0) {
    console.log("You won!");
    // score.addRoundWin(player.playerName);
    // score.addRoundLoss(opponent.playerName);
  }

  return battleResult;
}

export async function simulateAIBattleWithDelay(
  trainerA,
  trainerB,
  renderCallback
) {
  const turns = [];

  while (trainerA.pokemon.health > 0 && trainerB.pokemon.health > 0) {
    const actionA = generateEnemyAttack();
    const actionB = generateEnemyAttack();

    const actionResult = {
      playerAction: actionA,
      opponentAction: actionB,
      result: actionMatrix[actionA]?.[actionB] ?? "tie",
    };

    const turnOutcome = evaluateTurn(trainerA, trainerB, actionResult);

    turns.push({
      actionA,
      actionB,
      result: actionResult.result,
      hpA: turnOutcome.player.pokemon.health,
      hpB: turnOutcome.opponent.pokemon.health,
      damage: turnOutcome.damage,
    });

    if (renderCallback) {
      renderCallback(trainerA, trainerB, turns.at(-1), turnOutcome.damage);
    }

    await new Promise((resolve) => setTimeout(resolve, 800)); // delay per turn
  }

  return {
    trainerA,
    trainerB,
    turns,
  };
}

export function recoverPokemon(playerPokemon, opponentPokemon) {
  playerPokemon.health = playerPokemon.maxHealth;
  opponentPokemon.health = opponentPokemon.maxHealth;

  // console.log("Trainer A Health:", playerPokemon.health);
  // console.log("Trainer B Health:", opponentPokemon.health);
}
