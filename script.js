// Set the initial score and time limit
let score = 0;
let time = 30;

// Get the score and time elements from the HTML
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');

// Get the ball element from the HTML
const ball = document.querySelector('.ball');

// Add a click event listener to the ball
ball.addEventListener('click', () => {
  // Increase the score and update the score element
  score++;
  scoreElement.textContent = score;

  // Change the ball color
  changeBallColor();

  // Move the ball to a random position on the screen
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  ball.style.top = `${y}px`;
  ball.style.left = `${x}px`;
});
// Set a timer to count down from the time limit
const timer = setInterval(() => {
  // Decrease the time and update the time element
  time--;
  timeElement.textContent = time;

  // End the game if time runs out
  if (time <= 0) 
  {
     alert("Time out! Your score is " + score);
     restartGame();
  }
}, 1000);

// Reset the game

// Change the ball color
function changeBallColor() {
  // Generate a random color
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;

  // Set the ball color
  ball.style.backgroundColor = color;
}

function restartGame() {
  // Reset the score to zero
  score = 0;
  scoreElement.textContent = score;

  // Move the ball back to its original position
  ball.style.top = '0';
  ball.style.left = '0';

  // Reset the time to its initial value
  time = 30;
  timeElement.textContent = time;

  // Clear the existing game loop interval
  clearInterval(gameLoopInterval);

  // Start the game loop
  gameLoopInterval = setInterval(gameLoop, 1000);
}