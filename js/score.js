"use strict";

const scoreBoard = [];

export function addRoundWin(winner) {
  const player = scoreBoard.find((p) => p.trainer === winner);
  player.wins++;
  //   console.log("Player Score Stat:", player);
}

export function setTrainerScore(player) {
  scoreBoard.push({
    trainer: player.playerName,
    wins: 0,
  });
}

export function setScoreBoard(players) {
  players.forEach((player) => {
    setTrainerScore(player);
  });

  return scoreBoard;
}

export function getScoreBoard() {
  return rankPlayers(scoreBoard);
}

export function rankPlayers(players) {
  if (players.length <= 1) return players;

  const pivot = players[0];
  const left = [];
  const right = [];

  for (let i = 1; i < players.length; i++) {
    if (players[i].wins > pivot.wins) {
      left.push(players[i]);
    } else {
      right.push(players[i]);
    }
  }

  return [...rankPlayers(left), pivot, ...rankPlayers(right)];
}
