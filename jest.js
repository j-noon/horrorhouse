/**
 * @jest-environment jsdom
 */

import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf8");

describe("Game behavior", () => {
  let gameScript;
  let gameImage, hintButton, hintText, gameHint, tokenInput, checkButton, modalMessage, wintoken, gumpyToken;

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    jest.resetModules(); // Fresh import
    gameScript = require("./game.js");

    gameImage = document.getElementById("game-home");
    hintButton = document.getElementById("hint-btn");
    hintText = document.getElementById("hint");
    gameHint = document.getElementById("game-hint");
    tokenInput = document.getElementById("token-input");
    checkButton = document.getElementById("check-btn");
    modalMessage = document.getElementById("modal-message");
    wintoken = document.getElementById("wintoken");
    gumpyToken = document.getElementById("gumpy-token");

    wintoken.textContent = "123abc";
    gumpyToken.textContent = "gumpy123";
  });

  // Image transition test
  it("clicks first area and changes to room 1", () => {
    const rect = { left: 0, top: 0, width: 1000, height: 1000 };
    gameImage.getBoundingClientRect = () => rect;

    const clickX = 550, clickY = 750;
    gameImage.dispatchEvent(new MouseEvent("click", { clientX: clickX, clientY: clickY }));
    expect(gameImage.src).toContain("game-next.webp");
  });

  // Hint tests
  it("shows room 1 hint correctly", () => {
    gameScript.__setRoomIndex(1);
    hintButton.click();
    expect(hintText.textContent).toContain("gold on the floor");
  });

  it("shows room 2 hint (book not found)", () => {
    gameScript.__setRoomIndex(2);
    hintButton.click();
    expect(hintText.textContent).toContain("drawing is pretty relaxing");
  });

  it("shows room 2 hint (book found)", () => {
    gameScript.__setRoomIndex(2);
    gameScript.__setBookFound(true);
    hintButton.click();
    expect(hintText.textContent).toContain("keyboard magic spell");
  });

  // Token tests
  it("shows win message for correct token", () => {
    tokenInput.value = "123abc";
    checkButton.click();
    expect(modalMessage.textContent).toContain("Congratulations");
  });

  it("shows gumpy message for gumpy token", () => {
    tokenInput.value = "gumpy123";
    checkButton.click();
    expect(modalMessage.textContent).toContain("gumpies loot");
  });

  it("shows fail message for wrong token", () => {
    tokenInput.value = "wrong";
    checkButton.click();
    expect(modalMessage.textContent).toContain("doors remain locked");
  });

  // Clickable area logic
  function simulateClick(x, y, rectOverride = {}) {
    const rect = {
      left: 0, top: 0, width: 1000, height: 1000,
      ...rectOverride
    };
    gameImage.getBoundingClientRect = () => rect;
    gameImage.dispatchEvent(new MouseEvent("click", { clientX: x, clientY: y }));
  }

  it("clicks second area in room 1 and finds key", () => {
    gameScript.__setRoomIndex(1);
    simulateClick(800, 800);
    expect(gameHint.innerHTML).toContain("found the key");
  });

  it("clicks third area with key and enters library", () => {
    gameScript.__setRoomIndex(1);
    gameScript.__setKeyFound(true);
    simulateClick(350, 450);
    expect(gameImage.src).toContain("game-library.webp");
  });

  it("clicks fourth area and triggers alert", () => {
    window.alert = jest.fn();
    simulateClick(550, 500);
    expect(window.alert).toHaveBeenCalledWith("This key does not fit this door.");
  });

  it("clicks fifth area in library and finds book", () => {
    gameScript.__setRoomIndex(2);
    simulateClick(800, 800);
    expect(gameHint.innerHTML).toContain("found the book");
    expect(document.getElementById("wintoken").style.display).toBe("block");
  });

  it("clicks sixth area and opens terminal", () => {
    gameScript.__setRoomIndex(2);
    simulateClick(175, 850);
    expect(document.getElementById("Term-Modal").style.display).toBe("block");
  });
});
