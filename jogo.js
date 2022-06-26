const mario = document.querySelector('#mario');
const pipe = document.querySelector('#pipe');
const clouds = document.querySelector('#clouds')

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
  // o + antes do window converte a string resultante para numero
  const cloudsPosition = clouds.offsetLeft;

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

// faltando implementar o start
