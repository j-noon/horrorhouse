/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    const gameImage = document.getElementById("game-home");
    const gameHint = document.getElementById("game-hint");
    const hintButton = document.getElementById("hint-btn");
    const hintText = document.getElementById("hint");
    const nugget = document.getElementById("nugget");
    const images = [
        "assests/images/game-home.webp", 
        "assests/images/game-next.webp",
        "assests/images/game-library.webp"
    ];
    let currentImageIndex = 0;
    let keyFound = false; // Tracks if Area 2 has been clicked
    let bookFound = false; // tracks if book has been found.

    // Initially hide the nugget and the hint
    nugget.style.display = "none";
    hintText.style.display = "none";  // Hide the hint text initially

    gameImage.addEventListener("click", function (event) {
        const rect = gameImage.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        // First clickable area (door entrance)
        const firstArea = {
            xMin: rect.width * 0.5,
            xMax: rect.width * 0.6,
            yMin: rect.height * 0.7,
            yMax: rect.height * 0.8,
        };

        // Second clickable area (library key)
        const secondArea = {
            xMin: rect.width * 0.7, 
            xMax: rect.width * 0.9,
            yMin: rect.height * 0.7,
            yMax: rect.height * 0.9,
        };

        // Area 3: Unlocks only after key is found (moves to third room)
        const thirdArea = {
             xMin: rect.width * 0.3,
             xMax: rect.width * 0.4,
             yMin: rect.height * 0.3,
             yMax: rect.height * 0.6,
        };
        
        // Area 4: Wrong door (Triggers alert)
        const fourthArea = {
             xMin: rect.width * 0.5,
             xMax: rect.width * 0.6,
             yMin: rect.height * 0.4,
            yMax: rect.height * 0.6,
         };

        // Area 5: Library draws (finds the book)
        const fifthArea = {
            xMin: rect.width * 0.7,
            xMax: rect.width * 0.9,
            yMin: rect.height * 0.7,
           yMax: rect.height * 0.9,
        };

        if (clickX >= firstArea.xMin && clickX <= firstArea.xMax && clickY >= firstArea.yMin && clickY <= firstArea.yMax) {
            currentImageIndex = 1; // Move to the second room
            gameImage.src = images[currentImageIndex];
            gameHint.innerHTML = "<strong><em>You made it inside. The door slams shut. Can you find the key to the library?</em></strong>";
            nugget.style.display = "block"; // Show the nugget
            hintText.style.display = "none";  // Hide the hint when moving to a new room
        } else if (currentImageIndex === 1 && clickX >= secondArea.xMin && clickX <= secondArea.xMax && clickY >= secondArea.yMin && clickY <= secondArea.yMax) {
            gameHint.innerHTML = "<strong><em>You just found the key. What door does it work on?</em></strong>";
            keyFound = true; // Now Area 3 becomes clickable
            hintText.style.display = "none";  // Hide the hint when moving to a new room
        } else if (currentImageIndex === 1 && keyFound && clickX >= thirdArea.xMin && clickX <= thirdArea.xMax && clickY >= thirdArea.yMin && clickY <= thirdArea.yMax) {
            currentImageIndex = 2; // Move to third room
            gameImage.src = images[currentImageIndex];
            gameHint.innerHTML = "<strong><em>The key worked and you watched it fade into nothingness as the door opened on its own. Welcome to the library! What secrets are hidden here?</em></strong>";
            nugget.style.display = "none";
            hintText.style.display = "none";  // Hide the hint when moving to a new room
        } else if (currentImageIndex === 1 && clickX >= fourthArea.xMin && clickX <= fourthArea.xMax && clickY >= fourthArea.yMin && clickY <= fourthArea.yMax) {
            alert("This key does not fit this door.");
        } else if (currentImageIndex === 2 && clickX >= fifthArea.xMin && clickX <= fifthArea.xMax && clickY >= fifthArea.yMin && clickY <= fifthArea.yMax) {
            gameImage.src = images[currentImageIndex];
            gameHint.innerHTML = "<strong><em>You found the book! The title reads 'The controlling of A...'</em></strong>";
            bookFound = true;
            hintText.style.display = "none";  // Hide the hint when moving to a new room
        }
    });

    // Hint button functionality
    hintButton.addEventListener("click", function () {
        // Show hint based on the current room
        if (currentImageIndex === 1) {
            hintText.textContent = "Is that gold on the floor? Maybe look next to it!"; // Hint for second room
        } else if (currentImageIndex === 2) {
            if (!bookFound) {
                hintText.textContent = "What do most people do in libraries? I find drawing is pretty relaxing!"; // Hint for library room if book is not found
            } else {
                hintText.textContent = "Have you tried using the keyboard magic spell to find the book's hidden content?"; // Hint after the book is found
            }
        }
        hintText.style.display = "block"; // Show the hint when button is clicked
    });

 // Hide the hint paragraph when the "H" key is pressed
 document.addEventListener('keydown', function (event) {
    if (event.key === 'h' || event.key === 'H') {
      if (hintText.style.display == 'none') {
        hintText.style.display = 'block';
      } else {
        hintText.style.display = 'none'; // Hide the hint when "H" is pressed
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const correctToken = document.getElementById("wintoken").textContent.trim();
    const checkButton = document.getElementById("check-btn");
    const tokenInput = document.getElementById("token-input");

    // Checks if correct token input is made and alerts win or not
    checkButton.addEventListener("click", function () {
        const userToken = tokenInput.value.trim();

        if (userToken === correctToken) {
            alert("Congratulations! You win!");
        } else {
            alert("Try again!");
        }
    });
});