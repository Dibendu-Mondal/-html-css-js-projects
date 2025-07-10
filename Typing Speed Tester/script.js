const quotes = [
  "Typing is a skill that improves with practice.",
  "Speed and accuracy are essential in typing tests.",
  "Practice makes perfect when learning to type fast.",
  "The quick brown fox jumps over the lazy dog.",
  "Consistent practice leads to mastery."
];

let timer = 60;
let interval;
let quoteText = "";
let started = false;

const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const timerEl = document.getElementById("timer");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");

function loadQuote() {
  quoteText = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = quoteText;
}

function startTimer() {
  interval = setInterval(() => {
    timer--;
    timerEl.textContent = timer;
    if (timer === 0) {
      clearInterval(interval);
      calculateResults();
      inputEl.disabled = true;
    }
  }, 1000);
}

function calculateResults() {
  const input = inputEl.value;
  const wordsTyped = input.trim().split(/\s+/).length;
  const totalWords = quoteText.trim().split(/\s+/).length;

  // Calculate accuracy
  let correctChars = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === quoteText[i]) {
      correctChars++;
    }
  }

  const accuracy = ((correctChars / quoteText.length) * 100).toFixed(0);
  const wpm = Math.round(wordsTyped);

  accuracyEl.textContent = `${accuracy}%`;
  wpmEl.textContent = `${wpm}`;
}

inputEl.addEventListener("input", () => {
  if (!started) {
    started = true;
    startTimer();
  }
});

function resetTest() {
  clearInterval(interval);
  timer = 60;
  started = false;
  inputEl.disabled = false;
  inputEl.value = "";
  timerEl.textContent = "60";
  wpmEl.textContent = "0";
  accuracyEl.textContent = "0%";
  loadQuote();
}

loadQuote();
