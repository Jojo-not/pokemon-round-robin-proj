"use strict";

import * as pokemons from "./pokemons.js";
export const pokemonStarter = pokemons.starterOptions;
export const pokemonEvolutionChain = pokemons.evolutionChains;
export const pokemonRare = pokemons.rarePokemons;
export const legendaryPokemons = pokemons.legendaryPokemons;
import { characters } from "./characters.js";


/**
 * Helper function to create HTML for a pokemon on the intro screen.
 * @param {string} name - The name of the pokemon (e.g., 'treecko').
 * @param {string} alt - The alt text for the image.
 * @returns {string} HTML string for the pokemon display.
 */
function createIntroPokemon(name, alt) {
  const properName = name.charAt(0).toUpperCase() + name.slice(1);
  return `
    <div class="pokemon-char-intro-bg ${name}-bg-cont">
      <a 
        href="https://pokemondb.net/pokedex/${name}"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="${properName} Sprite Wiki"
      >
        <img
          class="${name}-img"
          src="https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif"
          alt="${alt}"
        />
      </a>
    </div>
  `;
}

export const introHTML = `
  <section class="game-intro-page">
      <!-- Pokemon BG -->
      <div class="game-title-bg-1 game-bg">
        <!-- Intro -->
        <div class="pokemon-title"></div>
        <p class="round-robin-title">Round-Robin Edition</p>

        <!-- Start Button -->
        <a class="start-btn title-btn" id="connect-wallet-btn">
          <span>Connect Wallet</span>                                                             
        </a>

        <!-- Pokemon Char BG -->
        <div class="pokemon-char-bg">
          ${createIntroPokemon("treecko", "Treecko")}
          ${createIntroPokemon("torchic", "Torchic")}
          ${createIntroPokemon("mudkip", "Mudkip")}
        </div>
      </div>
  </section>
`;

export const selectCharacterPage = `...${characters.map((char) => `
  <div class="carousel-item">
    <div class="trainer-card ${char.id} no-bg">
      <button class="select-trainer-btn ${char.id}" value="${char.id}">
        <div class="trainer-img-cont no-bg">
          <img class="trainer-img ${char.id}-img" src="${char.img}" alt="${char.name}" />
        </div>
        <p class="trainer-name">${char.name}</p>
      </button>
    </div>
  </div>
`).join("")}...`;

/**
 * Helper function to create a stat line for a pokemon.
 * @param {string} label - The name of the stat (e.g., 'Type').
 * @param {string|number} value - The value of the stat.
 * @returns {string} HTML string for the stat paragraph.
 */
function createPokemonStat(label, value) {
  return `
    <p class="pokemon-description">
      ${label}:
      <span class="pokemon-description-value text-capitalize">${value}</span>
    </p>
  `;
}

function pokemonStarterCarousel(pokemonStarter) {
  return pokemonStarter
    .map((pokemon, index) => {
      return `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <a
            href="https://pokemondb.net/pokedex/${pokemon.pokemonName}"
            class="pokemon-select-cont"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              class="d-block pokemon-selection-img"
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.pokemonName.toLowerCase()}.gif"
              alt="${pokemon.pokemonName}"
            />
            <div class="pokemon-select-description">
              <p class="pokemon-selection-name text-center">${
                pokemon.pokemonName
              }</p>
              ${createPokemonStat("Type", pokemon.pokemonType)}
              ${createPokemonStat("Evolution", pokemon.evolution.next)}
              ${createPokemonStat("Health", pokemon.health)}
              ${createPokemonStat("Stamina", pokemon.stamina)}
            </div>
          </a>
        </div>
      `;
    })
    .join("");
}

export const selectPokemon = `
<section class="game-intro-choose-pokemon">
  <!-- Pokemon BG -->
  <div class="game-title-bg-3 game-bg">
    <!-- Select Pokemon -->
    <p class="choose-player-title">Choose Your Pokemon</p>

    <div id="carouselPokemonSelection" class="carousel slide">
      <div class="carousel-inner">
        ${pokemonStarterCarousel(pokemonStarter)}
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselPokemonSelection"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button
        class="carousel-control-next carousel-control"
        type="button"
        data-bs-target="#carouselPokemonSelection"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <button class="start-btn title-btn select-pokemon-btn" id="select-pokemon-btn">
      <span>Select Pokemon</span>
    </button>
  </div>
</section>
`;

export const selectNumberOfOpponents = `
  <section class="battle-setting-section">
    <!-- Pokemon BG -->
    <div class="game-battle-setting-bg game-bg">
      <!-- Game Setting -->
      <div class="setting-cont">
        <p class="setting-label text-center">Choose Number of Opponents</p>
        <div class="setting-btn-cont">
          <button type="submit" class="start-btn setting-btn" value="5">
            5
          </button>

          <button type="submit" class="start-btn setting-btn" value="7">
            7
          </button>

          <button type="submit" class="start-btn setting-btn" value="9">
            9
          </button>
        </div>
      </div>
    </div>
  </section>
`;

/**
 * Helper function to generate the HTML for a pokemon's battle stats.
 * @param {object} pokemon - The pokemon object.
 * @returns {string} HTML string for the pokemon's stats.
 */
function renderPokemonBattleStats(pokemon) {
  return `
    <p class="pokemon-battle-name text-center">${pokemon.pokemonName}</p>
    <p class="pokemon-battle-stat">Health:
      <span class="pokemon-description-value text-capitalize">${
        pokemon.health
      }</span>
    </p>
    <p class="pokemon-battle-stat">Status:
      <span class="pokemon-description-value text-capitalize">${
        pokemon.status ?? "Normal"
      }</span>
    </p>
    <p class="pokemon-battle-stat">Type:
      <span class="pokemon-description-value text-capitalize">${
        pokemon.pokemonType
      }</span>
    </p>
  `;
}

/**
 * Helper function to return an HTML img tag for a rank crown.
 * @param {number} rank - The rank of the player (1, 2, or 3).
 * @returns {string} HTML img tag or an empty string.
 */
function getRankCrown(rank) {
  const crowns = {
    1: { src: "/img/misc/crown-gold.svg", alt: "gold crown" },
    2: { src: "/img/misc/crown-silver.svg", alt: "silver crown" },
    3: { src: "/img/misc/crown-bronze.svg", alt: "bronze crown" },
  };

  if (crowns[rank]) {
    return `<img class="top-rank-crown" src="${crowns[rank].src}" alt="${crowns[rank].alt}" />`;
  }
  return "";
}

function generateRankingModal(scoreBoard) {
  if (!Array.isArray(scoreBoard) || scoreBoard.length === 0) {
    return "";
  }

  return scoreBoard
    .map((trainer, index) => {
      const rank = index + 1;
      return `
      <tr>
        <th class="table-rank-text" scope="row">${rank}</th>
        <td>
          <div class="table-name-data-cont">
            ${trainer.trainer}
            <span>${getRankCrown(rank)}</span>
          </div>
        </td>
        <td class="text-center">${trainer.wins}</td>
      </tr>
    `;
    })
    .join("");
}

export function renderBattleStart(
  player,
  playerPokemon,
  opponent,
  opponentPokemon,
  roundNo,
  scoreBoard
) {
  return `
  <section class="battle-setting-section">
    <div class="game-battle-bg game-bg game-grid">
      <div class="round-cont">
        <p class="round-text pokemon-style-font d-flex justify-content-center">
          <span>Round</span>
          &ThickSpace;
          <span>${roundNo}</span>
        </p>
      </div>

     <!-- Player Pokemon -->
    <div class="player-pokemon-cont">
      <div class="player-pokemon-stat-cont">
        ${renderPokemonBattleStats(playerPokemon)}
      </div>
      <div class="player-pokemon-img-cont">
        <div class="damage-display player-damage"></div>
        <img
          class="player-pokemon-img"
          src="https://img.pokemondb.net/sprites/black-white/anim/back-normal/${playerPokemon.pokemonName.toLowerCase()}.gif"
          alt="${playerPokemon.pokemonName}"
        />
        <img
          class="pokemon-floor"
          src="/img/bg/pokemon_battle_template_floor.png"
          alt=""
        />
      </div>
    </div>

    <!-- Opponent Pokemon -->
    <div class="opponent-pokemon-cont">
      <div class="opponent-pokemon-img-cont">
        <div class="damage-display opponent-damage"></div>
        <img
          class="opponent-pokemon-img"
          src="https://img.pokemondb.net/sprites/black-white/anim/normal/${opponentPokemon.pokemonName.toLowerCase()}.gif"
          alt="${opponentPokemon.pokemonName}"
        />
        <img
          class="pokemon-floor"
          src="/img/bg/pokemon_battle_template_floor.png"
          alt=""
        />
      </div>
      <div class="player-pokemon-stat-cont">
        ${renderPokemonBattleStats(opponentPokemon)}
      </div>
    </div>


      <!-- Buttons -->
      <div class="battle-btn-cont battle-btn-post">
          <button class="battle-btn battle-btn-a" value="attack">Attack</button>
          <button class="battle-btn battle-btn-d" value="defend">Defend</button>
          <button class="battle-btn battle-btn-p" value="parry">Parry</button>
          <button class="battle-btn-score battle-btn-s" value="scoreBoard">Scores</button>

          <div class="ai-battle-log-cont d-none">
            <p class="ai-battle-log text-center">AI Battle:</p>
            <p class="ai-battle-log text-center text-capitalize">${
              player.playerName
            } vs ${opponent.playerName}</p>
          </div>
      </div>
    </div>
  </section>

  <aside class="score-modal-section d-none">
      <div class="score-modal-cont">
        <div class="score-modal-content">
          <p class="score-title text-center pokemon-style-font">
            Tournament Ranking
          </p>
          <table class="table table-hover">
            <thead>
              <tr>
                <th class="score-header" scope="col">#</th>
                <th class="score-header text-center" scope="col">
                  Name
                </th>
                <th
                  class="score-header text-center score-col"
                  scope="col"
                >
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              ${generateRankingModal(scoreBoard)}
            </tbody>
          </table>
          

          <p class="score-message text-center d-none">Thank you for playing!</p>
        </div>
        <button class="play-again-btn d-none" title="Play Again">
          Play Again ?
        </button>
        <button class="score-close-btn" title="Close">X</button>
      </div>
    </aside>
`;
}
