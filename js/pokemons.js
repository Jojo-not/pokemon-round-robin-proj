"use strict";

// Starter pokemons
export const starterOptions = [
  {
    pokemonName: "Treecko",
    pokemonType: ["grass"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 1.0, parry: 1.1, defend: 0.9 },
    statusEffects: [],

    evolution: { next: "Grovyle", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Torchic",
    pokemonType: ["fire"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 1.1, parry: 1.0, defend: 0.9 },
    statusEffects: [],

    evolution: { next: "Combusken", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Mudkip",
    pokemonType: ["water"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 1.0, parry: 0.9, defend: 1.1 },
    statusEffects: [],

    evolution: { next: "Marshtomp", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Poochyena",
    pokemonType: ["dark"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 1.1, parry: 0.9, defend: 1.0 },
    statusEffects: [],

    evolution: { next: "Mightyena", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Zigzagoon",
    pokemonType: ["normal"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 1.0, parry: 1.0, defend: 1.0 },
    statusEffects: [],

    evolution: { next: "Linoone", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Wurmple",
    pokemonType: ["bug"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 0.9, parry: 1.1, defend: 1.0 },
    statusEffects: [],

    evolution: { next: "Silcoon", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Lotad",
    pokemonType: ["water", "grass"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 0.9, parry: 1.1, defend: 1.0 },
    statusEffects: [],

    evolution: { next: "Lombre", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Seedot",
    pokemonType: ["grass"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 1.0, parry: 1.0, defend: 1.0 },
    statusEffects: [],

    evolution: { next: "Nuzleaf", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Taillow",
    pokemonType: ["normal", "flying"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 1.1, parry: 1.0, defend: 0.9 },
    statusEffects: [],

    evolution: { next: "Swellow", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Wingull",
    pokemonType: ["water", "flying"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 1.0, parry: 1.0, defend: 1.0 },
    statusEffects: [],

    evolution: { next: "Pelipper", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Ralts",
    pokemonType: ["psychic"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 0.9, parry: 1.2, defend: 0.9 },
    statusEffects: [],

    evolution: { next: "Kirlia", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Surskit",
    pokemonType: ["bug", "water"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 1.0, parry: 1.0, defend: 1.0 },
    statusEffects: [],

    evolution: { next: "Masquerain", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Shroomish",
    pokemonType: ["grass"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 1.0, parry: 1.0, defend: 1.0 },
    statusEffects: [],

    evolution: { next: "Breloom", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Slakoth",
    pokemonType: ["normal"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 1.2, parry: 0.8, defend: 1.0 },
    statusEffects: [],

    evolution: { next: "Vigoroth", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Nincada",
    pokemonType: ["bug", "ground"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 1.0, parry: 1.0, defend: 1.0 },
    statusEffects: [],

    evolution: { next: "Ninjask", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Whismur",
    pokemonType: ["normal"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 1.1, parry: 1.0, defend: 0.9 },
    statusEffects: [],

    evolution: { next: "Loudred", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Makuhita",
    pokemonType: ["fighting"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 1.2, parry: 1.0, defend: 0.8 },
    statusEffects: [],

    evolution: { next: "Hariyama", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Skitty",
    pokemonType: ["normal"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 0.9, parry: 1.1, defend: 1.0 },
    statusEffects: [],

    evolution: { next: "Delcatty", trigger: "win" },
    isRare: false,
  },
  {
    pokemonName: "Aron",
    pokemonType: ["steel", "rock"],
    health: 50,
    maxHealth: 50,
    stamina: 50,
    maxStamina: 50,
    bias: { recover: 1.0, attack: 1.1, parry: 1.0, defend: 1.1 },
    statusEffects: [],

    evolution: { next: "Lairon", trigger: "win" },
    isRare: false,
  },
];

export const evolutionChains = [
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Treecko",
        pokemonType: ["grass"],
        bias: { recover: 1.0, attack: 1.0, parry: 1.1, defend: 0.9 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Grovyle",
        pokemonType: ["grass"],
        bias: { recover: 1.0, attack: 1.1, parry: 1.0, defend: 1.0 },
        statTier: 80,
        isRare: false,
      },
      {
        pokemonName: "Sceptile",
        pokemonType: ["grass"],
        bias: { recover: 1.0, attack: 1.2, parry: 1.0, defend: 1.0 },
        statTier: 100,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Torchic",
        pokemonType: ["fire"],
        bias: { recover: 1.0, attack: 1.1, parry: 1.0, defend: 0.9 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Combusken",
        pokemonType: ["fire", "fighting"],
        bias: { recover: 1.0, attack: 1.2, parry: 1.0, defend: 1.0 },
        statTier: 80,
        isRare: false,
      },
      {
        pokemonName: "Blaziken",
        pokemonType: ["fire", "fighting"],
        bias: { recover: 1.0, attack: 1.3, parry: 0.9, defend: 1.0 },
        statTier: 100,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Mudkip",
        pokemonType: ["water"],
        bias: { recover: 1.0, attack: 1.0, parry: 0.9, defend: 1.1 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Marshtomp",
        pokemonType: ["water", "ground"],
        bias: { recover: 1.0, attack: 1.1, parry: 1.0, defend: 1.1 },
        statTier: 80,
        isRare: false,
      },
      {
        pokemonName: "Swampert",
        pokemonType: ["water", "ground"],
        bias: { recover: 1.0, attack: 1.2, parry: 1.0, defend: 1.1 },
        statTier: 100,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Poochyena",
        pokemonType: ["dark"],
        bias: { recover: 1.0, attack: 1.1, parry: 0.9, defend: 1.0 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Mightyena",
        pokemonType: ["dark"],
        bias: { recover: 1.0, attack: 1.2, parry: 1.0, defend: 1.0 },
        statTier: 90,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Zigzagoon",
        pokemonType: ["normal"],
        bias: { recover: 1.0, attack: 1.0, parry: 1.0, defend: 1.0 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Linoone",
        pokemonType: ["normal"],
        bias: { recover: 1.0, attack: 1.1, parry: 1.0, defend: 1.0 },
        statTier: 90,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Wurmple",
        pokemonType: ["bug"],
        bias: { recover: 1.0, attack: 0.9, parry: 1.1, defend: 1.0 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Silcoon",
        pokemonType: ["bug"],
        bias: { recover: 1.0, attack: 0.8, parry: 1.0, defend: 1.2 },
        statTier: 80,
        isRare: false,
      },
      {
        pokemonName: "Beautifly",
        pokemonType: ["bug", "flying"],
        bias: { recover: 1.0, attack: 1.2, parry: 1.0, defend: 0.9 },
        statTier: 100,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Lotad",
        pokemonType: ["water", "grass"],
        bias: { recover: 1.0, attack: 0.9, parry: 1.1, defend: 1.0 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Lombre",
        pokemonType: ["water", "grass"],
        bias: { recover: 1.0, attack: 1.0, parry: 1.0, defend: 1.1 },
        statTier: 80,
        isRare: false,
      },
      {
        pokemonName: "Ludicolo",
        pokemonType: ["water", "grass"],
        bias: { recover: 1.0, attack: 1.1, parry: 1.0, defend: 1.1 },
        statTier: 100,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Seedot",
        pokemonType: ["grass"],
        bias: { recover: 1.0, attack: 1.0, parry: 1.0, defend: 1.0 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Nuzleaf",
        pokemonType: ["grass", "dark"],
        bias: { recover: 1.0, attack: 1.1, parry: 1.0, defend: 1.0 },
        statTier: 80,
        isRare: false,
      },
      {
        pokemonName: "Shiftry",
        pokemonType: ["grass", "dark"],
        bias: { recover: 1.0, attack: 1.2, parry: 0.9, defend: 1.0 },
        statTier: 100,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Taillow",
        pokemonType: ["normal", "flying"],
        bias: { recover: 1.0, attack: 1.1, parry: 1.0, defend: 0.9 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Swellow",
        pokemonType: ["normal", "flying"],
        bias: { recover: 1.0, attack: 1.2, parry: 1.0, defend: 1.0 },
        statTier: 90,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Wingull",
        pokemonType: ["water", "flying"],
        bias: { recover: 1.0, attack: 1.0, parry: 1.0, defend: 1.0 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Pelipper",
        pokemonType: ["water", "flying"],
        bias: { recover: 1.0, attack: 1.1, parry: 1.0, defend: 1.1 },
        statTier: 90,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Ralts",
        pokemonType: ["psychic"],
        bias: { recover: 1.0, attack: 0.9, parry: 1.2, defend: 0.9 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Kirlia",
        pokemonType: ["psychic"],
        bias: { recover: 1.0, attack: 1.0, parry: 1.1, defend: 1.0 },
        statTier: 80,
        isRare: false,
      },
      {
        pokemonName: "Gardevoir",
        pokemonType: ["psychic", "fairy"],
        bias: { recover: 1.0, attack: 1.2, parry: 1.0, defend: 1.0 },
        statTier: 100,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Surskit",
        pokemonType: ["bug", "water"],
        bias: { recover: 1.0, attack: 1.0, parry: 1.0, defend: 1.0 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Masquerain",
        pokemonType: ["bug", "flying"],
        bias: { recover: 1.0, attack: 1.1, parry: 1.0, defend: 1.0 },
        statTier: 90,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Shroomish",
        pokemonType: ["grass"],
        bias: { recover: 1.0, attack: 1.0, parry: 1.0, defend: 1.0 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Breloom",
        pokemonType: ["grass", "fighting"],
        bias: { recover: 1.0, attack: 1.2, parry: 1.0, defend: 1.0 },
        statTier: 90,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Slakoth",
        pokemonType: ["normal"],
        bias: { recover: 1.0, attack: 1.2, parry: 0.8, defend: 1.0 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Vigoroth",
        pokemonType: ["normal"],
        bias: { recover: 1.0, attack: 1.1, parry: 1.0, defend: 1.0 },
        statTier: 80,
        isRare: false,
      },
      {
        pokemonName: "Slaking",
        pokemonType: ["normal"],
        bias: { recover: 1.0, attack: 1.3, parry: 0.9, defend: 1.1 },
        statTier: 100,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Nincada",
        pokemonType: ["bug", "ground"],
        bias: { recover: 1.0, attack: 1.0, parry: 1.0, defend: 1.0 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Ninjask",
        pokemonType: ["bug", "flying"],
        bias: { recover: 1.0, attack: 1.2, parry: 1.0, defend: 0.9 },
        statTier: 90,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Whismur",
        pokemonType: ["normal"],
        bias: { recover: 1.0, attack: 1.1, parry: 1.0, defend: 0.9 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Loudred",
        pokemonType: ["normal"],
        bias: { recover: 1.0, attack: 1.2, parry: 1.0, defend: 1.0 },
        statTier: 80,
        isRare: false,
      },
      {
        pokemonName: "Exploud",
        pokemonType: ["normal"],
        bias: { recover: 1.0, attack: 1.3, parry: 1.0, defend: 1.0 },
        sprite: "url-to-exploud.gif",
        statTier: 100,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Makuhita",
        pokemonType: ["fighting"],
        bias: { recover: 1.0, attack: 1.2, parry: 1.0, defend: 0.8 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Hariyama",
        pokemonType: ["fighting"],
        bias: { recover: 1.0, attack: 1.3, parry: 1.0, defend: 1.0 },
        statTier: 90,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Skitty",
        pokemonType: ["normal"],
        bias: { recover: 1.0, attack: 0.9, parry: 1.1, defend: 1.0 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Delcatty",
        pokemonType: ["normal"],
        bias: { recover: 1.0, attack: 1.0, parry: 1.1, defend: 1.0 },
        statTier: 90,
        isRare: false,
      },
    ],
  },
  {
    trigger: "win",
    chain: [
      {
        pokemonName: "Aron",
        pokemonType: ["steel", "rock"],
        bias: { recover: 1.0, attack: 1.1, parry: 1.0, defend: 1.1 },
        statTier: 50,
        isRare: false,
      },
      {
        pokemonName: "Lairon",
        pokemonType: ["steel", "rock"],
        bias: { recover: 1.0, attack: 1.2, parry: 1.0, defend: 1.2 },
        statTier: 80,
        isRare: false,
      },
      {
        pokemonName: "Aggron",
        pokemonType: ["steel", "rock"],
        bias: { recover: 1.0, attack: 1.3, parry: 1.0, defend: 1.3 },
        statTier: 100,
        isRare: false,
      },
    ],
  },
];

export const rarePokemons = [
  {
    pokemonName: "Sableye",
    pokemonType: ["dark", "ghost"],
    health: 100,
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    bias: { recover: 1.0, attack: 1.1, parry: 1.2, defend: 1.2 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
  {
    pokemonName: "Mawile",
    pokemonType: ["steel", "fairy"],
    health: 100,
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    bias: { recover: 1.0, attack: 1.2, parry: 1.0, defend: 1.3 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
  {
    pokemonName: "Torkoal",
    pokemonType: ["fire"],
    health: 100,
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    bias: { recover: 1.0, attack: 1.0, parry: 1.0, defend: 1.4 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
  {
    pokemonName: "Spinda",
    pokemonType: ["normal"],
    health: 100,
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    bias: { recover: 1.0, attack: 1.0, parry: 1.0, defend: 1.0 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
  {
    pokemonName: "Zangoose",
    pokemonType: ["normal"],
    health: 100,
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    bias: { recover: 1.0, attack: 1.3, parry: 1.0, defend: 0.9 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
  {
    pokemonName: "Seviper",
    pokemonType: ["poison"],
    health: 100,
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    bias: { recover: 1.0, attack: 1.2, parry: 1.0, defend: 1.0 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
  {
    pokemonName: "Lunatone",
    pokemonType: ["rock", "psychic"],
    health: 100,
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    bias: { recover: 1.0, attack: 1.0, parry: 1.2, defend: 1.2 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
  {
    pokemonName: "Solrock",
    pokemonType: ["rock", "psychic"],
    health: 100,
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    bias: { recover: 1.0, attack: 1.2, parry: 1.0, defend: 1.2 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
];

export const legendaryPokemons = [
  {
    pokemonName: "Regirock",
    pokemonType: ["rock"],
    health: 150,
    maxHealth: 150,
    stamina: 120,
    maxStamina: 120,
    bias: { recover: 1.0, attack: 1.3, parry: 1.0, defend: 1.5 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
  {
    pokemonName: "Regice",
    pokemonType: ["ice"],
    health: 140,
    maxHealth: 140,
    stamina: 130,
    maxStamina: 130,
    bias: { recover: 1.0, attack: 1.0, parry: 1.2, defend: 1.6 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
  {
    pokemonName: "Registeel",
    pokemonType: ["steel"],
    health: 145,
    maxHealth: 145,
    stamina: 125,
    maxStamina: 125,
    bias: { recover: 1.0, attack: 1.1, parry: 1.1, defend: 1.5 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
  {
    pokemonName: "Latios",
    pokemonType: ["dragon", "psychic"],
    health: 130,
    maxHealth: 130,
    stamina: 140,
    maxStamina: 140,
    bias: { recover: 1.0, attack: 1.4, parry: 1.1, defend: 1.2 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
  {
    pokemonName: "Rayquaza",
    pokemonType: ["dragon", "flying"],
    health: 160,
    maxHealth: 160,
    stamina: 150,
    maxStamina: 150,
    bias: { recover: 1.0, attack: 1.5, parry: 1.0, defend: 1.3 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
  {
    pokemonName: "Latias",
    pokemonType: ["dragon", "psychic"],
    health: 130,
    maxHealth: 130,
    stamina: 140,
    maxStamina: 140,
    bias: { recover: 1.0, attack: 1.3, parry: 1.2, defend: 1.3 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
  {
    pokemonName: "Groudon",
    pokemonType: ["ground"],
    health: 170,
    maxHealth: 170,
    stamina: 140,
    maxStamina: 140,
    bias: { recover: 1.0, attack: 1.6, parry: 1.0, defend: 1.4 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
  {
    pokemonName: "Kyogre",
    pokemonType: ["water"],
    health: 170,
    maxHealth: 170,
    stamina: 150,
    maxStamina: 150,
    bias: { recover: 1.0, attack: 1.5, parry: 1.1, defend: 1.4 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
  {
    pokemonName: "Deoxys",
    pokemonType: ["psychic"],
    health: 120,
    maxHealth: 120,
    stamina: 160,
    maxStamina: 160,
    bias: { recover: 1.0, attack: 1.7, parry: 1.0, defend: 0.8 },
    statusEffects: [],

    evolution: { next: null, trigger: null },
    isRare: true,
  },
];

export function shuffleStarterOptions(starterOptions) {
  for (let i = starterOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [starterOptions[i], starterOptions[j]] = [
      starterOptions[j],
      starterOptions[i],
    ];
  }

  return starterOptions;
  2;
}

export function getPokemon(listOfPokemons, pName) {
  return (
    listOfPokemons.find((pokemon) => pName === pokemon.pokemonName) ??
    "Pokemon not found"
  );
}

export function getNextEvolution(pokemonName, evolutionChains) {
  for (const chainObj of evolutionChains) {
    const chain = chainObj.chain;
    const index = chain.findIndex((p) => p.pokemonName === pokemonName);

    if (index !== -1 && index < chain.length - 1) {
      return chain[index + 1];
    }
  }

  return null;
}

export function setEvolvedPokemon(currentPokemon, evolutionPokemon) {
  currentPokemon.pokemonName = evolutionPokemon.pokemonName;
  currentPokemon.pokemonType = structuredClone(evolutionPokemon.pokemonType);
  currentPokemon.health = evolutionPokemon.statTier;
  currentPokemon.maxHealth = evolutionPokemon.statTier;
  currentPokemon.stamina = evolutionPokemon.statTier;
  currentPokemon.maxStamina = evolutionPokemon.statTier;
  currentPokemon.bias = structuredClone(evolutionPokemon.bias);
  currentPokemon.evolution = structuredClone(evolutionPokemon.evolution);
  currentPokemon.isRare = evolutionPokemon.isRare;
}

export function canEvolve(pokemon) {
  return Boolean(pokemon.evolution?.next);
}
