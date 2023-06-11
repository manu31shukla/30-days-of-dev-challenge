let score = 0;
let isGameRunning = false;
let intervalId;
let lives = 3;
const maxLives = 3;
const heartsContainer = document.getElementById('hearts-container');

const player = document.getElementById('player');
const bullet = document.getElementById('bullet');
const target = document.getElementById('target');
const scoreValue = document.getElementById('score');
const startButton = document.getElementById('start-button');
const gunshotSound = new Audio('gunshot.mp3');
const targetHitSound = new Audio('target-hit.mp3');
const backgroundSound = new Audio('jungle.mp3');

startButton.addEventListener('click', () => {
  if (!isGameRunning) {
    isGameRunning = true;
    startButton.disabled = true;
    startGame();
  }
});

document.addEventListener('keydown', (event) => {
  if (isGameRunning && event.code === 'Space') {
    event.preventDefault();
    fireBullet();
  }
});

function startGame() {
  moveTarget();
  playBackgroundSound();
  startButton.classList.add('hide');
  score = 0;
  scoreValue.innerText = score;
}

function playBackgroundSound() {
  backgroundSound.play();
  backgroundSound.loop = true;
}

function stopBackgroundSound() {
  backgroundSound.pause();
  backgroundSound.currentTime = 0;
}

function moveTarget() {
  const maxWidth = window.innerWidth - target.offsetWidth;
  const maxHeight = window.innerHeight - target.offsetHeight;
  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);

  target.style.right = `${randomX}px`;
  target.style.top = `${randomY}px`;

  intervalId = setTimeout(moveTarget, 3000);

  const targetPosition = target.getBoundingClientRect();
  const playerPosition = player.getBoundingClientRect();

  if (
    targetPosition.left <= playerPosition.right &&
    targetPosition.right >= playerPosition.left &&
    targetPosition.top <= playerPosition.bottom &&
    targetPosition.bottom >= playerPosition.top
  ) {
    reduceLife();
    resetTarget();
  }
}

function reduceHeart() {
    lives--;
    const livesValue = document.getElementById('lives-value');
    livesValue.innerText = lives;
  
    if (lives <= 0) {
      stopGame();
      gameOverScreen.classList.remove('hide');
  } else {
    heartsContainer.removeChild(heartsContainer.lastChild);
      // Show the game over popup and handle game reset or end actions
      // You can implement this part according to your desired UI/UX
    }
  }
  function resetGame() {
    hearts = maxHearts;
    const heartsValue = document.getElementById('hearts-container');
    heartsValue.innerHTML = '';
    for (let i = 0; i < hearts; i++) {
      const heart = document.createElement('span');
      heart.classList.add('heart');
      heartsValue.appendChild(heart);
    }
    gameOverScreen.classList.add('hide');
    startGame();
  }
  
  
  function resetTarget() {
    // ...existing code...
  
    if (lives > 0) {
      setTimeout(() => {
        resetTarget();
      }, 2000); // Delay in milliseconds before resetting the position
    }
  }
function fireBullet() {
    const bulletStartPosition = player.getBoundingClientRect().right;
    const targetPosition = target.getBoundingClientRect();
  
    bullet.style.visibility = 'visible';
    bullet.style.left = `${bulletStartPosition}px`;
    bullet.style.bottom = '150px'; // Adjust the value as needed
  
    const bulletInterval = setInterval(() => {
      const bulletPosition = bullet.getBoundingClientRect();
  
      if (
        bulletPosition.left >= targetPosition.left &&
        bulletPosition.right <= targetPosition.right &&
        bulletPosition.top <= targetPosition.bottom &&
        bulletPosition.bottom >= targetPosition.top
      ) {
        bullet.style.visibility = 'hidden';
        clearInterval(bulletInterval);
        score++;
        scoreValue.innerText = score;
        targetHitSound.play();
        resetTarget();
      }
  
      if (bulletPosition.right > window.innerWidth) {
        bullet.style.visibility = 'hidden';
        clearInterval(bulletInterval);
      }
  
      bullet.style.left = `${bulletPosition.left + 10}px`;
    }, 10);
  
    gunshotSound.play();
  }
  
  

function resetTarget() {
    // Change target image
  target.style.backgroundImage = "url('new-target-image.png')";

  // Set a delay before changing the position
  setTimeout(() => {
    const maxHeight = window.innerHeight - target.offsetHeight;
    const randomY = Math.floor(Math.random() * maxHeight);

    target.style.top = `${randomY}px`;
    // Reset target image to its original source
    target.style.backgroundImage = "url('target-image.png')";
  }, 1000); // Delay in milliseconds before resetting the position
 
}
// ...existing code...

const gameOverScreen = document.getElementById('game-over');
const replayButton = document.getElementById('replay-button');
const exitButton = document.getElementById('exit-button');

replayButton.addEventListener('click', resetGame);
exitButton.addEventListener('click', exitGame);

function reduceLife() {
  // ...existing code...

  if (lives <= 0) {
    stopGame();
    gameOverScreen.classList.remove('hide');
  }
}

function resetGame() {
  lives = maxLives;
  const livesValue = document.getElementById('lives-value');
  livesValue.innerText = lives;
  gameOverScreen.classList.add('hide');
  startGame();
}

function exitGame() {
  // Perform actions to exit the game
}

// ...existing code...

