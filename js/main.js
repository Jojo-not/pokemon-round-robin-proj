"use strict";

import * as pokemons from "./pokemons.js";
export const pokemonStarter = pokemons.starterOptions;
export const pokemonEvolutionChain = pokemons.evolutionChains;
export const pokemonRare = pokemons.rarePokemons;
export const legendaryPokemons = pokemons.legendaryPokemons;

export const introHTML = `
  <section class="game-intro-page">
      <!-- Pokemon BG -->
      <div class="game-title-bg-1 game-bg">
        <!-- Intro -->
        <div class="pokemon-title"></div>
        <p class="round-robin-title">Round-Robin Edition</p>

        <!-- Start Button -->
        <a class="start-btn title-btn" id="start-btn">
          <span>Game Start</span>                                                             
        </a>

        <!-- Pokemon Char BG -->
        <div class="pokemon-char-bg">
          <!-- Pokemon BG Designs - Treecko -->
          <div class="pokemon-char-intro-bg treeko-bg-cont">
            <a 
              href="https://pokemondb.net/pokedex/treecko"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Treecko Sprite Wiki"
              ><img
                class="treeko-img"
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/treecko.gif"
                alt="Treecko"
            /></a>
          </div>

          <!-- Pokemon BG Designs - Torchic -->
          <div class="pokemon-char-intro-bg torchic-bg-cont">
            <a 
              href="https://pokemondb.net/pokedex/torchic"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Torchic Wiki"
              ><img
                class="torchic-img"
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/torchic-f.gif"
                alt="Torchic"
            /></a>
          </div>

          <!-- Pokemon BG Designs - Mudkip -->
          <div class="pokemon-char-intro-bg mudkip-bg-cont">
            <a 
              href="https://pokemondb.net/pokedex/mudkip"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Mudkip Sprite Wiki"
              ><img
                class="mudkip-img"
                src="https://img.pokemondb.net/sprites/black-white/anim/normal/mudkip.gif"
                alt="Mudkip"
            /></a>
          </div>
        </div>
      </div>
  </section>
`;

export const selectCharacter = `
  <section class="game-intro-choose-player">
    <!-- Pokemon BG -->
    <div class="game-title-bg-2 game-bg">
      <!-- Select Character -->
      <p class="choose-player-title">Choose Your Character</p>

      <!-- Pokemon Trainer Options -->
      <div class="trainer-selection-cont">
        <!-- Select Male -->
        <div class="select-male-cont">
          <button class="select-trainer-btn male" value="male">
            <img
              class="select-male-img"
              src="/img/trainer/male-svgrepo-com.svg"
              alt="Select - Male"
            />
          </button>
        </div>

        <!-- Select Female -->
        <div class="select-female-cont">
          <button class="select-trainer-btn female" value="female">
            <img
              class="select-female-img"
              src="/img/trainer/female-svgrepo-com.svg"
              alt="Select - Male"
            />
          </button>
        </div>
      </div>

      <!-- Pokemon Trainer BG -->
      <div class="pokemon-char-bg">
        <!-- Pokemon Trainer - May -->
        <div class="pokemon-trainer-intro-bg may-bg-cont">
          <a
            href="https://bulbapedia.bulbagarden.net/wiki/May_(game)"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="May Birch Wiki"
            ><img
              class="may-img"
              src="/img/trainer/May-Sprite-1.png"
              alt="May Birch"
          /></a>

          <p class="title-trainer-name">May Birch</p>
        </div>

        <!-- Pokemon Trainer - Brendan -->
        <div class="pokemon-trainer-intro-bg brendan-bg-cont">
          <a
            href="https://bulbapedia.bulbagarden.net/wiki/Brendan_(game)"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Brendan Sprite Wiki"
            ><img
              class="brendan-img"
              src="/img/trainer/Brendan-Sprite-1.png"
              alt="Brendan Sprite"
          /></a>

          <p class="title-trainer-name">Brendan Birch</p>
        </div>
      </div>
    </div>
  </section>
`;

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
              <p class="pokemon-description">
                Type:
                <span class="pokemon-description-value text-capitalize">${
                  pokemon.pokemonType
                }</span>
              </p>
              <p class="pokemon-description">
                Evolution:
                <span class="pokemon-description-value text-capitalize">${
                  pokemon.evolution.next
                }</span>
              </p>
              <p class="pokemon-description">
                Health:
                <span class="pokemon-description-value text-capitalize">${
                  pokemon.health
                }</span>
              </p>
              <p class="pokemon-description">
                Stamina:
                <span class="pokemon-description-value text-capitalize">${
                  pokemon.stamina
                }</span>
              </p>
            </div>
          </a>
        </div>
      `;
    })
    .join("");
}

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

export function renderBattleStart(
  playerPokemon,
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
          <p class="pokemon-battle-name text-center">${
            playerPokemon.pokemonName
          }</p>
          <p class="pokemon-battle-stat">Health:
            <span class="pokemon-description-value text-capitalize">${
              playerPokemon.health
            }</span>
          </p>
          <p class="pokemon-battle-stat">Status:
            <span class="pokemon-description-value text-capitalize">${
              playerPokemon.status ?? "Normal"
            }</span>
          </p>
          <p class="pokemon-battle-stat">Type:
            <span class="pokemon-description-value text-capitalize">${
              playerPokemon.pokemonType
            }</span>
          </p>
        </div>
        <div class="player-pokemon-img-cont">
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
        <div class="opponent-pokemon-cont">
          <div class="opponent-pokemon-img-cont">
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
        </div>
        <div class="player-pokemon-stat-cont">
          <p class="pokemon-battle-name text-center">${
            opponentPokemon.pokemonName
          }</p>
          <p class="pokemon-battle-stat">Health:
            <span class="pokemon-description-value text-capitalize">${
              opponentPokemon.health
            }</span>
          </p>
          <p class="pokemon-battle-stat">Status:
            <span class="pokemon-description-value text-capitalize">${
              opponentPokemon.status ?? "Normal"
            }</span>
          </p>
          <p class="pokemon-battle-stat">Type:
            <span class="pokemon-description-value text-capitalize">${
              opponentPokemon.pokemonType
            }</span>
          </p>
        </div>
      </div>

      <!-- Buttons -->
      <div class="battle-btn-cont battle-btn-post">
          <button class="battle-btn battle-btn-a" value="attack">Attack</button>
          <button class="battle-btn battle-btn-d" value="defend">Defend</button>
          <button class="battle-btn battle-btn-p" value="parry">Parry</button>
          <button class="battle-btn-score battle-btn-s" value="scoreBoard">Scores</button>
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
                <th class="score-header" class="text-center" scope="col">
                  Name
                </th>
                <th
                  class="score-header text-center score-col"
                  class="text-center"
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

function generateRankingModal(scoreBoard) {
  if (!Array.isArray(scoreBoard) || scoreBoard.length === 0) {
    return;
  }

  return scoreBoard
    .map((trainers, index) => {
      return `
      <tr>
        <th class="table-rank-text" scope="row">${index + 1}</th>
        <td>
          <div class="table-name-data-cont">
            ${trainers.trainer}
            <span
              >${
                index + 1 === 1
                  ? `<img
                class="top-rank-crown"
                src="/img/misc/crown-gold.svg"
                alt="gold crown"
            />`
                  : index + 1 === 2
                  ? `<img
                class="top-rank-crown"
                src="/img/misc/crown-silver.svg"
                alt="silver crown"
            />`
                  : index + 1 === 3
                  ? `<img
                class="top-rank-crown"
                src="/img/misc/crown-bronze.svg"
                alt="bronze crown"
            />`
                  : ""
              }</span>
          </div>
        </td>
        <td class="text-center">${trainers.wins}</td>
      </tr>
    `;
    })
    .join("");
}
