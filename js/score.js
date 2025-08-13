"use strict";

const scoreBoard = [];
const tournamentScoreBoard = [];

const score = {
  trainer: "",
  wins: 0,
  loses: 0,
};

export function addRoundWin(winner) {
  const player = scoreBoard.find((p) => p.trainer === winner);
  return Boolean(player.wins++);
}

export function addRoundLoss(loser) {
  const player = scoreBoard.find((p = p.trainer === loser));
  return Boolean(player.loses++);
}

export function setTrainerScore(player) {
  scoreBoard.push({
    trainer: player.playerName,
    wins: 0,
    loses: 0,
  });
}

export function setScoreBoard(players) {
  players.forEach((player) => {
    setTrainerScore(player);
  });

  return scoreBoard;
}

export function recordRoundResults() {
  const roundSnapshot = scoreBoard.map((player) => ({ ...player }));
  tournamentScoreBoard.push(roundSnapshot);
}

export function getRoundScoreBoard(roundNo) {
  const round = tournamentScoreBoard[roundNo - 1];
  return round ? rankPlayers(round) : null;
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
