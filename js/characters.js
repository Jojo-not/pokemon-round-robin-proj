// characters.js

export const characters = [
  {
    id: "0",
    name: "May Birch",
    img: "/img/trainer/May-Sprite-1.png",
    avatarFront: "May-Sprite-Front.png",
    avatarBack: "May-Sprite-Back.png",
    description: "A passionate Pokemon trainer from Hoenn region",
    specialty: "Water & Grass Types",
    level: "Expert",
    region: "Hoenn"
  },
  {
    id: "1",
    name: "Brendan Birch",
    img: "/img/trainer/Brendan-Sprite-1.png",
    avatarFront: "Brendan-Sprite-Front.png",
    avatarBack: "Brendan-Sprite-Back.png",
    description: "A skilled Pokemon trainer and researcher",
    specialty: "Fire & Electric Types",
    level: "Expert",
    region: "Hoenn"
  },
  {
    id: "2",
    name: "Lucas",
    img: "/img/trainer/Lucas-Sprite-1.png",
    avatarFront: "Lucas-Sprite-Front.png",
    avatarBack: "Lucas-Sprite-Back.png",
    description: "A determined trainer from Sinnoh region",
    specialty: "Steel & Psychic Types",
    level: "Expert",
    region: "Sinnoh"
  },
];

// Enhanced trainer selection with detailed information
export const selectCharacter = `
<section class="game-intro-choose-player">
  <div class="game-title-bg-2 game-bg">
    <p class="choose-player-title pokemon-style-font">Choose Your Character</p>
    
    <!-- Trainer Info Display -->
    <div class="trainer-info-display">
      <div class="selected-trainer-info" id="selected-trainer-info">
        <h3 class="trainer-info-title">Select a Trainer</h3>
        <p class="trainer-info-description">Choose your character to see their details</p>
      </div>
    </div>

    <div id="characterCarousel" class="carousel slide" data-bs-ride="false" data-bs-interval="false">
      <div class="carousel-inner trainer-selection-cont enhanced-selection">
        ${characters
          .map(
            (char, index) => `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
              <div class="trainer-card ${char.id}" data-trainer-id="${char.id}">
                <button class="select-trainer-btn ${char.id}" value="${char.id}">
                  <div class="trainer-img-cont">
                    <img class="trainer-img ${char.id}-img" src="${char.img}" alt="${char.name}" />
                    <div class="trainer-level-badge">${char.level}</div>
                  </div>
                  <div class="trainer-details">
                    <h3 class="trainer-name">${char.name}</h3>
                    <p class="trainer-region">${char.region} Region</p>
                    <div class="trainer-specialty">
                      <span class="specialty-label">Specialty:</span>
                      <span class="specialty-value">${char.specialty}</span>
                    </div>
                  </div>
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
      <button class="confirm-btn title-btn select-character-btn" id="select-character-btn" disabled>
        <span>Confirm Selection</span>
      </button>
    </div>
  </div>
</section>
`;
