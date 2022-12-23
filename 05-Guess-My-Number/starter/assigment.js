'use strict';
// ------------------- CODING CHALENGE #1 -------------------//

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20,
  mess = 'Start guessing...',
  backColor = '#222',
  winBordWidth = '15rem',
  win = false,
  highScore = 0;

document.querySelector('.check').addEventListener('click', function (params) {
  console.log('check ' + secretNumber);
  const guess = Number(document.querySelector('.guess').value);
  if (!win) {
    if (score > 1) {
      if (!guess) {
        mess = `No number!`;
      } else {
        if (guess === secretNumber) {
          mess = `Correct Number!`;
          backColor = '#60b347';
          winBordWidth = '30rem';
          document.querySelector('.number').textContent = secretNumber;
          if (score > highScore) {
            highScore = score;
          }
          win = true;
        } else if (guess > secretNumber) {
          mess = `Too high!`;
          score -= 1;
        } else {
          mess = `Too low!`;
          score -= 1;
        }
      }
    } else {
      mess = `you lost game`;
      score = 0;
      document.querySelector('.number').textContent = secretNumber;
    }
  }
  changeScrean();
});

document.querySelector('.again').addEventListener('click', function (params) {
  score = 20;
  mess = 'Start guessing...';
  backColor = '#222';
  winBordWidth = '15rem';
  win = false;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  changeScrean();
});
function changeScrean() {
  document.querySelector('.message').textContent = mess;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = backColor;
  document.querySelector('.number').style.width = winBordWidth;
  document.querySelector('.highscore').textContent = highScore;
}
// -------------------------------------------------------//
