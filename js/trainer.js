/**
 *
 * player object
 *
 */
export const player = {
  id: "",
  playerName: "",
  avatar: {
    avatarFront: "",
    avatarBack: "",
  },
  pokemon: "",
  sprites: {
    charFront: "",
    charBack: "",
    charWalkUp: "",
    charWalkDown: "",
    charWalkLeft: "",
    charWalkRight: "",
  },
};

export let _opponents = [];

/**
 *
 * list of objects containing premade opponents
 *
 */
export const opponentList = [
  {
    id: "2",
    playerName: "Battle Girl",
    avatar: "/img/trainer/Battle-Girl-Sprite.png",
    pokemon: "",
  },
  {
    id: "3",
    playerName: "Bird Keeper",
    avatar: "/img/trainer/Bird-Keeper-Sprite.png",
    pokemon: "",
  },
  {
    id: "4",
    playerName: "Old Couple",
    avatar: "/img/trainer/Old-Couple-Sprite.png",
    pokemon: "",
  },
  {
    id: "5",
    playerName: "Maxie",
    avatar: "/img/trainer/Maxie-Sprite.png",
    pokemon: "",
  },
  {
    id: "6",
    playerName: "Red",
    avatar: "/img/trainer/Red-Sprite.png",
    pokemon: "",
  },
  {
    id: "7",
    playerName: "Bruno",
    avatar: "/img/trainer/Bruno-Sprite.png",
    pokemon: "",
  },
  {
    id: "8",
    playerName: "Giovanni",
    avatar: "/img/trainer/Giovanni-Sprite.png",
    pokemon: "",
  },
  {
    id: "9",
    playerName: "Lance",
    avatar: "/img/trainer/Lance-Sprite.png",
    pokemon: "",
  },
  {
    id: "10",
    playerName: "Misty",
    avatar: "/img/trainer/Misty-Sprite.png",
    pokemon: "",
  },
];

/**
 *
 * @param numberOfOpponents
 * @param opponentList
 *
 * Uses quicksort algorithm. Utilises recurssion.
 *
 * @returns shuffled opponent list
 */
export function setOpponents(numberOfOpponents, opponentList) {
  for (let i = opponentList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opponentList[i], opponentList[j]] = [opponentList[j], opponentList[i]];
  }

  const opponents = [];
  for (let i = 0; i < numberOfOpponents; i++) {
    opponents.push(opponentList[i]);
  }

  return opponents;
}

/**
 *
 * @param opponents
 * @param pokemons
 * @returns inputs shuffled pokemons to opponents
 */
export function setOpponentPokemons(opponents, pokemons) {
  for (let i = 0; i < opponents.length; i++) {
    opponents[i].pokemon = structuredClone(pokemons[i]);
  }
  _opponents = opponents;
  return _opponents;
}
