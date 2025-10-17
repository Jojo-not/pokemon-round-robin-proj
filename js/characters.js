// characters.js

export const characters = [
  {
    id: "0",
    name: "May Birch",
    img: "/img/trainer/May-Sprite-1.png",
    avatarFront: "May-Sprite-Front.png",
    avatarBack: "May-Sprite-Back.png",
  },
  {
    id: "1",
    name: "Brendan Birch",
    img: "/img/trainer/Brendan-Sprite-1.png",
    avatarFront: "Brendan-Sprite-Front.png",
    avatarBack: "Brendan-Sprite-Back.png",
  },
  
   {
    id: "2",
    name: "Lucas",
    img: "/img/trainer/Lucas-Sprite-1.png",
    avatarFront: "Lucas-Sprite-Front.png",
    avatarBack: "Lucas-Sprite-Back.png",
   },
];

// Optional — export a pre-rendered section if needed elsewhere
export const selectCharacter = `
<section class="game-intro-choose-player">
  <div class="game-title-bg-2 game-bg">
    <p class="choose-player-title pokemon-style-font">Choose Your Character</p>

    <div id="characterCarousel" class="carousel slide" data-bs-ride="false" data-bs-interval="false">
      <div class="carousel-inner trainer-selection-cont enhanced-selection">
        ${characters
          .map(
            (char, index) => `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
              <div class="trainer-card ${char.id} no-bg">
                <button class="select-trainer-btn ${char.id}" value="${char.id}">
                  <div class="trainer-img-cont no-bg">
                    <img class="trainer-img ${char.id}-img" src="${char.img}" alt="${char.name}" />
                  </div>
                  <p class="trainer-name">${char.name}</p>
                </button>
              </div>
            </div>
          `
          )
          .join("")}
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#characterCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button class="carousel-control-next" type="button" data-bs-target="#characterCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="trainer-start-cont">
      <button class="confirm-btn title-btn select-character-btn" id="select-character-btn">
        <span>Confirm Selection</span>
      </button>
    </div>
  </div>
</section>
`;
