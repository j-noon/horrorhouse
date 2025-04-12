document.addEventListener("DOMContentLoaded", function () {
  const gameImage = document.getElementById("game-home");
  const gameHint = document.getElementById("game-hint");
  const hintButton = document.getElementById("hint-btn");
  const hintText = document.getElementById("hint");
  const nugget = document.getElementById("nugget");
  const terminalModal = document.getElementById("Term-Modal");
  const terminalCloseBtn = terminalModal.querySelector(".close");
  const checkButton = document.getElementById("check-btn");
  const tokenInput = document.getElementById("token-input");
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];
  const modalMessage = document.getElementById("modal-message");

  const images = [
    "assests/images/game-home.webp",
    "assests/images/game-next.webp",
    "assests/images/game-library.webp",
  ];

  let currentImageIndex = 0;
  let keyFound = false;
  let bookFound = false;

  nugget.style.display = "none";
  hintText.style.display = "none";
});
