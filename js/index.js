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
let tournamentScoreBoard = [];

const mainContent = document.getElementById("main-content");
mainContent.innerHTML = Main.introHTML;

const startGameBtn = mainContent.querySelector(".start-btn");
const player = trainers.player;

/**
 *
 *  Entry point of the game
 *
 */
startGameBtn.addEventListener("click", function (e) {
  console.log("start btn clicked");

  e.preventDefault();

  console.log("player:", player);

  selectGender();
});

/**
 *
 *  Gender selection
 *
 */
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

/**
 *
 *  Pokemon selection
 *
 */
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

/**
 *
 *  Number of opponents selection
 *  Sets the number of opponents and their pokemons
 *  Sets tournament scoreboard
 *
 */
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

      roundRobinPlayers = structuredClone(opponents);
      roundRobinPlayers.unshift(player);

      console.log("Round Robin Players:", roundRobinPlayers);

      tournamentRoster = battle.scheduleRounds(roundRobinPlayers.length);

      console.log("Battle Roster:", tournamentRoster);

      tournamentScoreBoard = score.setScoreBoard(roundRobinPlayers);
      console.log("Scoreboard:", tournamentScoreBoard);

      startTournament();

      // playerBattle(roundRobinPlayers, battleRoster);
    });
  });
}

/**
 *
 *  Entry point of battles
 *  Sets round index to 0
 *
 */
async function startTournament() {
  currentRoundIndex = 0;

  await evaluateNextRound();
}

/**
 *
 *  Starts the round.
 *  If currentRound is equal or bigger than the tournament roster:
 *    - End game.
 *    - Open Scoreboard
 *    - Allow player to start again
 *
 *  Else, start match.
 *    - If player's turn, run renderPlayerBattle()
 *    - Else, run renderAIBattle()
 *
 */
async function evaluateNextRound() {
  if (currentRoundIndex >= tournamentRoster.length) {
    const scoreModalEl = document.querySelector(".score-modal-section");
    const playAgain = document.querySelector(".play-again-btn");
    const sectionEl = document.querySelector("section");

    console.log("Tournament complete!");
    console.log("Final Ranking:", score.getScoreBoard());
    scoreModalEl.classList.remove("d-none");
    sectionEl.classList.add("blur");
    playAgain.classList.remove("d-none");
    document.querySelector(".score-message").classList.remove("d-none");

    playAgain.addEventListener("click", function () {
      window.location.reload();
      scoreModalEl.classList.add("d-none");
    });

    closeBtn.addEventListener("click", function () {
      // console.log("clicked!");
      scoreModalEl.classList.add("d-none");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !scoreModalEl.classList.contains("d-none")) {
        scoreModalEl.classList.add("d-none");
      }
    });

    document.addEventListener("click", function (e) {
      const isModalVisible = !scoreModalEl.classList.contains("d-none");
      const clickedInsideModal = e.target.closest(".score-modal-section");
      const clickedOpenButton = e.target.closest(".battle-btn-score");

      if (isModalVisible && !clickedInsideModal && !clickedOpenButton) {
        scoreModalEl.classList.add("d-none");
      }
    });
    return;
  }

  const match = tournamentRoster[currentRoundIndex];
  const trainerA = roundRobinPlayers[match.match[0]];
  const trainerB = roundRobinPlayers[match.match[1]];
  const round = match.round;

  const isPlayerMatch = trainerA.id === player.id || trainerB.id === player.id;

  console.log("Current Ranking:", score.getScoreBoard());

  if (isPlayerMatch) {
    renderPlayerBattle(trainerA, trainerB, round);
  } else {
    await renderAIBattle(trainerA, trainerB, round);
  }
}

/**
 *
 *  Starts player battle until a player's hp reaches 0
 *  Then, move on to return to evaluateNextRound().
 *
 */
function renderPlayerBattle(trainerA, trainerB, round) {
  mainContent.innerHTML = Main.renderBattleStart(
    trainerA,
    trainerA.pokemon,
    trainerB,
    trainerB.pokemon,
    round,
    score.getScoreBoard()
  );

  document.querySelector(".battle-btn").style.display = "block";
  document.querySelector(".battle-btn-score").style.display = "block";
  document.querySelector(".ai-battle-log-cont").classList.add("d-none");

  document.querySelectorAll(".battle-btn").forEach((btn) => {
    btn.addEventListener("click", async function (e) {
      const btnValue = e.currentTarget.value;
      const result = battle.evaluatePlayerBattle(trainerA, trainerB, btnValue);

      updateBattleVisuals(trainerA, trainerB, {
        hpA: result.playerHP,
        hpB: result.opponentHP,
        actionA: result.playerAction,
        actionB: result.opponentAction,
      });

      console.log("Battle Result:", result);

      if (result.playerHP <= 0 || result.opponentHP <= 0) {
        const roundWinner =
          result.playerHP > 0 ? trainerA.playerName : trainerB.playerName;

        score.addRoundWin(roundWinner);

        const roundWinnerObj = roundRobinPlayers.find(
          (x) => x.playerName === roundWinner
        );
        pokemons.evolvePokemon(roundWinnerObj);

        currentRoundIndex++;
        battle.recoverPokemon(trainerA.pokemon, trainerB.pokemon);

        await new Promise((resolve) => setTimeout(resolve, 800));
        evaluateNextRound();
      }
    });
  });

  // **** Modal Functions **** //

  const scoreModalBtn = document.querySelector(".battle-btn-score");
  const closeBtn = document.querySelector(".score-close-btn");
  const scoreModalEl = document.querySelector(".score-modal-section");
  const playAgain = document.querySelector(".play-again-btn");
  const sectionEl = document.querySelector("section");

  scoreModalBtn.addEventListener("click", function () {
    console.log("clicked!");
    scoreModalEl.classList.toggle("d-none");
    sectionEl.classList.add("blur");
  });

  playAgain.addEventListener("click", function () {
    window.location.reload();
    scoreModalEl.classList.add("d-none");
    sectionEl.classList.remove("blur");
  });

  closeBtn.addEventListener("click", function () {
    // console.log("clicked!");
    scoreModalEl.classList.add("d-none");
    sectionEl.classList.remove("blur");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !scoreModalEl.classList.contains("d-none")) {
      scoreModalEl.classList.add("d-none");
      sectionEl.classList.remove("blur");
    }
  });

  document.addEventListener("click", function (e) {
    const isModalVisible = !scoreModalEl.classList.contains("d-none");
    const clickedInsideModal = e.target.closest(".score-modal-section");
    const clickedOpenButton = e.target.closest(".battle-btn-score");

    if (isModalVisible && !clickedInsideModal && !clickedOpenButton) {
      scoreModalEl.classList.add("d-none");
      sectionEl.classList.remove("blur");
    }
  });
}

/**
 *
 *  Starts computer battle until a player's hp reaches 0
 *  Then, move on to return to evaluateNextRound().
 *
 */
async function renderAIBattle(trainerA, trainerB, round) {
  mainContent.innerHTML = Main.renderBattleStart(
    trainerA,
    trainerA.pokemon,
    trainerB,
    trainerB.pokemon,
    round,
    score.getScoreBoard()
  );

  document.querySelectorAll(".battle-btn").forEach((el) => {
    el.style.display = "none";
  });
  document.querySelectorAll(".battle-btn-score").forEach((el) => {
    el.style.display = "none";
  });

  document.querySelector(".ai-battle-log-cont").classList.remove("d-none");

  const result = battle.simulateAIBattleWithDelay(
    trainerA,
    trainerB,
    updateBattleVisuals
  );

  await result;

  const winner =
    trainerA.pokemon.health > 0 ? trainerA.playerName : trainerB.playerName;

  score.addRoundWin(winner);
  const roundWinnerObj = roundRobinPlayers.find((x) => x.playerName === winner);
  pokemons.evolvePokemon(roundWinnerObj);
  currentRoundIndex++;
  battle.recoverPokemon(trainerA.pokemon, trainerB.pokemon);
  await new Promise((resolve) => setTimeout(resolve, 800));
  evaluateNextRound();
}

/**
 *
 *  Updates visual and animation after each attack
 *
 */
function updateBattleVisuals(trainerA, trainerB, turn) {
  const playerHP = document.querySelector(
    ".player-pokemon-stat-cont .pokemon-battle-stat span"
  );
  const opponentHP = document.querySelector(
    ".opponent-pokemon-cont .pokemon-battle-stat span"
  );

  const playerPokemon = document.querySelector(".player-pokemon-img");

  const opponentPokemon = document.querySelector(".opponent-pokemon-img");

  if (playerHP) playerHP.textContent = turn.hpA;
  if (opponentHP) opponentHP.textContent = turn.hpB;

  playerHP.classList.add("hp-flash");
  playerPokemon.classList.add("player-pokemon-action");
  setTimeout(() => {
    opponentHP.classList.add("hp-flash");
    opponentPokemon.classList.add("opponent-pokemon-action");
  }, 500);

  setTimeout(() => {
    playerHP.classList.remove("hp-flash");
    playerPokemon.classList.remove("player-pokemon-action");
    opponentHP.classList.remove("hp-flash");
    opponentPokemon.classList.remove("opponent-pokemon-action");
  }, 300);

  console.log(
    `${trainerA.playerName} used ${turn.actionA}, ${trainerB.playerName} used ${turn.actionB}`
  );
}
