"use strict";

import * as Main from "./main.js";

const mainContent = document.getElementById("main-content");
mainContent.innerHTML = Main.introHTML;

const startGameBtn = mainContent.querySelector(".btn");

startGameBtn.addEventListener("click", function (e) {
  console.log("start btn clicked");

  e.preventDefault();
  mainContent.style.display = "none";
});
