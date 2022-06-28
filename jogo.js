const mario = document.querySelector('#mario');
const pipe = document.querySelector('#pipe');
const clouds = document.querySelector('#clouds')
const gameScreen = document.querySelector('#game')
const carabom = document.querySelector('#carabom')
let score = document.querySelector('#points')
let points = 0;

const jump = () => {
  if(mario.classList.length === 0) {
    mario.classList.add('jump');
    setTimeout(() => {
      mario.classList.remove('jump');
    }, 500)
  }
}

const verify = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  points ++;
  score.innerText = points;
  // o + antes do window converte a string resultante para numero
  const cloudsPosition = clouds.offsetLeft;
  points > 500 && points < 1500 ? carabom.innerText = 'Que cara bom !!' 
  : points >= 1500 ? carabom.innerText = 'Tá bom amigo! Já platinou o game xD !!' 
  : carabom.innerText = 'Corre !!!'
  

  if (pipePosition <= 95 && pipePosition > -30 && marioPosition <= 85) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    clouds.style.left = `${cloudsPosition}px`;
    mario.style.bottom = `${marioPosition}px`;
    mario.src = '/Images/game-over.png';
    mario.style.width = '65px';
    clearInterval(verify);
  }
}, 10)

document.addEventListener('keydown', jump);
gameScreen.addEventListener('click', jump);