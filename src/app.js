let alertShown = false;

function cardGenerator() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let suits = ["♦", "♥", "♠", "♣"];

  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];

  document.getElementById("numberCard").innerHTML = randomNumber;
  document.getElementById("suitLeftTop").innerHTML = randomSuit;
  document.getElementById("suitLeftTop").style.color =
    randomSuit === "♦" || randomSuit === "♥" ? "#dc3545" : "";
  document.getElementById("suitRightTop").innerHTML = randomSuit;
  document.getElementById("suitRightTop").style.color =
    randomSuit === "♦" || randomSuit === "♥" ? "#dc3545" : "";
  document.getElementById("suitLeftBottom").innerHTML = randomSuit;
  document.getElementById("suitLeftBottom").style.color =
    randomSuit === "♦" || randomSuit === "♥" ? "#dc3545" : "";
  document.getElementById("suitRightBottom").innerHTML = randomSuit;
  document.getElementById("suitRightBottom").style.color =
    randomSuit === "♦" || randomSuit === "♥" ? "#dc3545" : "";

  console.log(`Your card is ${randomNumber} of ${randomSuit}`);

  if (!alertShown) {
    showAlert(
      "If you don't like your card it will automatically generate another one every 10 seconds or you can press the button, too.",
      "info"
    );
    alertShown = true;
  }
}

function showAlert(message, type) {
  const alertContainer = document.getElementById("alertContainer");
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
  alertDiv.role = "alert";
  alertDiv.innerHTML = `${message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
  alertContainer.appendChild(alertDiv);
}

setInterval(cardGenerator, 10000);