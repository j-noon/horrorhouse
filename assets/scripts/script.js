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
    "assets/images/game-home.webp",
    "assets/images/game-next.webp",
    "assets/images/game-library.webp",
  ];

  let currentImageIndex = 0;
  let keyFound = false;
  let bookFound = false;

  // Initially hide the nugget and the hint
  nugget.style.display = "none";
  hintText.style.display = "none";

  // Click areas
  const areas = getClickableAreas(gameImage);

  gameImage.addEventListener("click", handleImageClick);
  hintButton.addEventListener("click", showHint);
  document.addEventListener("keydown", toggleHintDisplay);
  terminalCloseBtn.onclick = closeTerminalModal;
  span.onclick = closeModal;
  window.onclick = closeModalOnClick;
  checkButton.addEventListener("click", checkToken);

  function handleImageClick(event) {
    const rect = gameImage.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    if (isInArea(clickX, clickY, areas.first)) {
      moveToNextRoom(
        1,
        "<em>You made it inside. The door slams shut. Can you find the key to the library?</em>"
      );
    } else if (
      isInArea(clickX, clickY, areas.second) &&
      currentImageIndex === 1
    ) {
      keyFound = true;
      gameHint.innerHTML =
        "<em>You just found the key. What door does it work on?</em>";
        document.querySelectorAll(".clues1").forEach(el => el.style.display = "block");
    } else if (isInArea(clickX, clickY, areas.third) && keyFound) {
      moveToNextRoom(
        2,
        "<em>The key worked and you watched it fade into nothingness as the door opened on its own, but strangly its still within your pockets??? Welcome to the library! What secrets are hidden here?</em>"
      );
    } else if (isInArea(clickX, clickY, areas.fourth)) {
      alert("This key does not fit this door.");
    } else if (
      isInArea(clickX, clickY, areas.fifth) &&
      currentImageIndex === 2
    ) {
      gameHint.innerHTML =
        "<em>You found the book! The title reads 'The controlling of A...'</em>";
      bookFound = true;
      document.getElementById("wintoken").style.display = "block";
      document.querySelectorAll(".clues2").forEach(el => el.style.display = "block");
    } else if (
      isInArea(clickX, clickY, areas.sixth) &&
      currentImageIndex === 2
    ) {
      openTerminalModal();
    }
  }

  function isInArea(clickX, clickY, area) {
    return (
      clickX >= area.xMin &&
      clickX <= area.xMax &&
      clickY >= area.yMin &&
      clickY <= area.yMax
    );
  }

  function moveToNextRoom(roomIndex, hintMessage) {
    currentImageIndex = roomIndex;
    gameImage.src = images[currentImageIndex];
    gameHint.innerHTML = hintMessage;
    nugget.style.display = currentImageIndex === 1 ? "block" : "none";
    hintText.style.display = "none";
  }

  function getClickableAreas(gameImage) {
    const rect = gameImage.getBoundingClientRect();
    return {
      first: {
        xMin: rect.width * 0.5,
        xMax: rect.width * 0.6,
        yMin: rect.height * 0.7,
        yMax: rect.height * 0.8,
      },
      second: {
        xMin: rect.width * 0.7,
        xMax: rect.width * 0.9,
        yMin: rect.height * 0.7,
        yMax: rect.height * 0.9,
      },
      third: {
        xMin: rect.width * 0.3,
        xMax: rect.width * 0.4,
        yMin: rect.height * 0.3,
        yMax: rect.height * 0.6,
      },
      fourth: {
        xMin: rect.width * 0.5,
        xMax: rect.width * 0.6,
        yMin: rect.height * 0.4,
        yMax: rect.height * 0.6,
      },
      fifth: {
        xMin: rect.width * 0.7,
        xMax: rect.width * 0.9,
        yMin: rect.height * 0.7,
        yMax: rect.height * 0.9,
      },
      sixth: {
        xMin: rect.width * 0.15,
        xMax: rect.width * 0.2,
        yMin: rect.height * 0.8,
        yMax: rect.height * 0.9,
      },
    };
  }

  function showHint() {
    if (currentImageIndex === 1) {
      hintText.textContent =
        "Is that gold on the floor? Maybe look next to it!";
    } else if (currentImageIndex === 2) {
      hintText.textContent = !bookFound
        ? "What do most people do in libraries? I find drawing is pretty relaxing!"
        : "Have you tried using the keyboard magic spell to find the book's hidden content?";
    }
    hintText.style.display = "block";
  }

  function toggleHintDisplay(event) {
    if (event.key === "h" || event.key === "H") {
      hintText.style.display =
        hintText.style.display === "none" ? "block" : "none";
    }
  }

  function openTerminalModal() {
    terminalModal.style.display = "block";
    document.querySelector(".clues3").style.display = "block";
  }

  function closeTerminalModal() {
    terminalModal.style.display = "none";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function closeModalOnClick(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    } else if (event.target === terminalModal) {
      closeTerminalModal();
    }
  }

  function checkToken() {
    const correctToken = document.getElementById("wintoken").textContent.trim();
    const userToken = tokenInput.value.trim();
    const gumpyToken = document
      .getElementById("gumpy-token")
      .textContent.trim(); // Getting gumpy-token value

    if (userToken === correctToken) {
      modalMessage.textContent = "🎉 Congratulations! You win!";
    } else if (userToken === gumpyToken) {
      modalMessage.textContent =
        "🎉 You found gumpies loot, but the doors remain locked. Try using the spell ctrl and a..";
    } else {
      modalMessage.textContent =
        "🚪 The doors remain locked... keep searching!";
    }

    modal.style.display = "block";
  }
});
