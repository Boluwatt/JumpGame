// HTML ELEMENTS
const character = document.getElementById("character");
const block = document.getElementById("block");
const play = document.getElementById("play");

// FUNCTIONS
const jump = () => {
  if (character.classList !== "animate") {
    character.classList.add("animate");
  }

  setTimeout(() => {
    character.classList.remove("animate");
  }, 750);
};

const checkIfDead = setInterval(() => {
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("You Lose");
  }
}, 10);

const playAgain = () => {
  location.reload();
};

//   EVENT HANDLER
play.addEventListener("click", playAgain);
