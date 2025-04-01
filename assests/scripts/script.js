/* script.js */
document.getElementById("hint-btn").addEventListener("click", function() {
    document.getElementById("hint").style.display = "block";
});

document.getElementById("check-btn").addEventListener("click", function() {
    let token = document.getElementById("token-input").value;
    let result = document.getElementById("result");
    
    if (token === "correct-token") {
        result.textContent = "Congratulations! You have won!";
    } else {
        result.textContent = "Incorrect token. Try again.";
    }
}