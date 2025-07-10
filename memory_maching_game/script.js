const board = document.getElementById("gameBoard");
const statusText = document.getElementById("status");

// Emoji pairs
const emojis = ['🍎', '🍕', '🐶', '🚗', '🎮', '🌟', '🎲', '🧠'];
let cards = [...emojis, ...emojis]; // duplicate to make pairs
cards = cards.sort(() => 0.5 - Math.random()); // shuffle

let flipped = [];
let matchedPairs = 0;

function createBoard() {
  cards.forEach((emoji, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-index", index);
    card.setAttribute("data-emoji", emoji);
    card.innerText = emoji;

    card.addEventListener("click", () => flipCard(card));
    board.appendChild(card);
  });
}

function flipCard(card) {
  if (card.classList.contains("matched") || flipped.includes(card)) return;

  card.classList.add("flipped");
  flipped.push(card);

  if (flipped.length === 2) {
    const [card1, card2] = flipped;
    const isMatch = card1.dataset.emoji === card2.dataset.emoji;

    setTimeout(() => {
      if (isMatch) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedPairs++;
        if (matchedPairs === emojis.length) {
          statusText.textContent = "🎉 You won! All pairs matched!";
        }
      } else {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
      }
      flipped = [];
    }, 600);
  }
}

createBoard();
