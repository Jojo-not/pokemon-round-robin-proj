"use strict";

import * as Main from "./main.js";
import * as trainers from "./trainer.js";
import * as pokemons from "./pokemons.js";
import * as battle from "./battle.js";
import * as score from "./score.js";

window.Main = Main;
window.trainers = trainers;
window.pokemons = pokemons;
window.battle = battle;

let tournamentRoster = [];
let roundRobinPlayers = [];
let currentRoundIndex = 0;

const mainContent = document.getElementById("main-content");
mainContent.innerHTML = Main.introHTML;

const startGameBtn = mainContent.querySelector(".start-btn");
const player = trainers.player;

startGameBtn.addEventListener("click", function (e) {
  console.log("start btn clicked");

  e.preventDefault();

  console.log("player:", player);

  selectGender();
});

function selectGender() {
  console.log("Current Page: Gender selection section page");
  mainContent.innerHTML = Main.selectCharacter;

  document.querySelectorAll(".select-trainer-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const selectedGender = btn.value;
      console.log("selected gender:", selectedGender);
      player.gender = selectedGender;

      if (selectedGender === "male") {
        player.playerName = "Brendan Birch";

        player.avatar.avatarFront = "Brendan-Sprite-Front.png";
        player.avatar.avatarBack = "Brendan-Sprite-Back.png";

        player.sprites.charBack = "";
        player.sprites.charFront = "";
        player.sprites.charWalkUp = "";
        player.sprites.charWalkDown = "";
        player.sprites.charWalkLeft = "";
        player.sprites.charWalkRight = "";
      } else {
        player.playerName = "May Birch";

        player.avatar.avatarFront = "May-Sprite-Front.png";
        player.avatar.avatarBack = "May-Sprite-Back.png";

        player.sprites.charBack = "";
        player.sprites.charFront = "";
        player.sprites.charWalkUp = "";
        player.sprites.charWalkDown = "";
        player.sprites.charWalkLeft = "";
        player.sprites.charWalkRight = "";
      }
      console.log("player:", player);

      selectPokemon();
    });
  });
}

function selectPokemon() {
  mainContent.innerHTML = Main.selectPokemon;

  document
    .querySelector(".select-pokemon-btn")
    .addEventListener("click", function () {
      const activeSlide = document.querySelector(
        "#carouselPokemonSelection .carousel-item.active"
      );
      const pokemonImg = activeSlide.querySelector(".pokemon-selection-img");
      const pokemon = pokemons.getPokemon(
        pokemons.starterOptions,
        pokemonImg?.alt
      );

      console.log("Selected Pokemon:", pokemon);

      player.pokemon = pokemon;

      console.log("player:", player);

      selectNumberOfOpponents();
    });
}

function selectNumberOfOpponents() {
  mainContent.innerHTML = Main.selectNumberOfOpponents;

  document.querySelectorAll(".setting-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      console.log("clicked opponent btn!");
      const numberOfOpponents = btn.value;
      console.log("No. of Opponents:", numberOfOpponents);

      const shuffledStarterPokemons = pokemons.shuffleStarterOptions(
        structuredClone(pokemons.starterOptions)
      );

      const opponents = trainers.setOpponents(
        numberOfOpponents,
        structuredClone(trainers.opponentList)
      );

      trainers.setOpponentPokemons(opponents, shuffledStarterPokemons);
      battle.setNumberOfRounds(numberOfOpponents);

      const roundRobinPlayers = structuredClone(opponents);
      roundRobinPlayers.unshift(player);

      console.log("Round Robin Players:", roundRobinPlayers);

      const battleRoster = battle.scheduleRounds(roundRobinPlayers.length);

      console.log("Battle Roster:", battleRoster);

      startTournament(roundRobinPlayers, battleRoster);

      const scoreBoard = score.setScoreBoard(roundRobinPlayers);
      console.log("Scoreboard:", scoreBoard);

      // playerBattle(roundRobinPlayers, battleRoster);
    });
  });
}

async function startTournament(players, roster) {
  roundRobinPlayers = players;
  tournamentRoster = roster;
  currentRoundIndex = 0;

  await evaluateNextRound();
}

async function evaluateNextRound() {
  if (currentRoundIndex >= tournamentRoster.length) {
    console.log("Tournament complete!");
    console.log(score.getScoreBoard());
    return;
  }

  const match = tournamentRoster[currentRoundIndex];
  const trainerA = roundRobinPlayers[match.match[0]];
  const trainerB = roundRobinPlayers[match.match[1]];
  const round = match.round;

  const isPlayerMatch = trainerA.id === player.id || trainerB.id === player.id;

  if (isPlayerMatch) {
    renderPlayerBattle(trainerA, trainerB, round);
  } else {
    await renderAIBattle(trainerA, trainerB, round);
  }
}

function renderPlayerBattle(trainerA, trainerB, round) {
  mainContent.innerHTML = Main.renderBattleStart(
    trainerA.pokemon,
    trainerB.pokemon,
    round
  );

  document.querySelectorAll(".battle-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const btnValue = e.currentTarget.value;
      const result = battle.evaluatePlayerBattle(trainerA, trainerB, btnValue);

      console.log("Battle Result:", result);

      if (result.playerHP <= 0 || result.opponentHP <= 0) {
        const roundWinner =
          result.playerHP > 0 ? trainerA.playerName : trainerB.playerName;
        console.log(score.getRoundScoreBoard(currentRoundIndex + 1));
        score.addRoundWin(roundWinner);

        currentRoundIndex++;
        battle.recoverPokemon(trainerA.pokemon, trainerB.pokemon);
        console.log(score.getRoundScoreBoard(currentRoundIndex));
        evaluateNextRound(); // continue tournament
      } else {
        renderPlayerBattle(trainerA, trainerB, round); // next turn
      }
    });
  });
}

async function renderAIBattle(trainerA, trainerB, round) {
  mainContent.innerHTML = Main.renderBattleStart(
    trainerA.pokemon,
    trainerB.pokemon,
    round
  );

  const result = battle.simulateAIBattleWithDelay(
    trainerA,
    trainerB,
    updateBattleVisuals
  );

  await result;

  const winner =
    trainerA.pokemon.health > 0 ? trainerA.playerName : trainerB.playerName;

  score.addRoundWin(winner);
  currentRoundIndex++;
  evaluateNextRound();
}

function updateBattleVisuals(trainerA, trainerB, turn) {
  const playerHP = document.querySelector(
    ".player-pokemon-stat-cont .pokemon-battle-stat span"
  );
  const opponentHP = document.querySelector(
    ".opponent-pokemon-cont .pokemon-battle-stat span"
  );

  if (playerHP) playerHP.textContent = turn.hpA;
  if (opponentHP) opponentHP.textContent = turn.hpB;

  console.log(
    `AI Turn: ${trainerA.playerName} used ${turn.actionA}, ${trainerB.playerName} used ${turn.actionB}`
  );
}
