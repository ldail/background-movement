function findCurrentPositions() {
  let background = {};
  let character = {};

  //background
  let backgroundPositionX = document.querySelector('.app').style['background-position-x'] || `-${(2560 - window.screen.width) / 2}px`;
  let backgroundPositionY = document.querySelector('.app').style['background-position-y'] || `-${(1600 - window.screen.height) / 2}px`;
  let backgroundX = parseInt(backgroundPositionX.slice(0,backgroundPositionX.length-1));
  let backgroundY = parseInt(backgroundPositionY.slice(0,backgroundPositionY.length-1));

  //character
  let characterPositionX = document.querySelector('.character').style['background-position-x'] || '0px';
  let characterPositionY = document.querySelector('.character').style['background-position-y'] || '0px';
  let characterX = parseInt(characterPositionX.slice(0,characterPositionX.length-1));
  let characterY = parseInt(characterPositionY.slice(0,characterPositionY.length-1));

  background['X'] = backgroundX;
  background['Y'] = backgroundY;
  character['X'] = characterX;
  character['Y'] = characterY;
  return {background, character};
}

function checkKey(e) {
  let {character, background} = findCurrentPositions();

  //defaults - character
  let characterYDown = 0;
  let characterYUp = -89;
  let characterYLeft = -178;
  let characterYRight = -267;  

  let stepPixels = 7;

  //defaults - background
  let leftmostX = 1;
  let rightmostX = 2560 - window.screen.width;
  let topmostY = 1;
  let bottommostY = 1600 - window.screen.height;
  

  //up
  if (e.keyCode === 38) {
    if (character.Y !== characterYUp) {
      document.querySelector('.character').style.backgroundPosition = `${character.X}px ${characterYUp}px`;
    }

    if (background.Y + stepPixels < ~topmostY) {
      document.querySelector('.app').style.backgroundPosition = `${background.X}px ${background.Y + stepPixels}px`;
    }
  }

  //down
  if (e.keyCode === 40) {
    if (character.Y !== characterYDown) {
      document.querySelector('.character').style.backgroundPosition = `${character.X}px ${characterYDown}px`;
    }

    if (background.Y + stepPixels > ~bottommostY) {
      document.querySelector('.app').style.backgroundPosition = `${background.X}px ${background.Y - stepPixels}px`;
    }
  }

  //left
  if (e.keyCode === 37) {
    if (character.Y !== characterYLeft) {
      document.querySelector('.character').style.backgroundPosition = `${character.X}px ${characterYLeft}px`;
    }

    if (background.X + stepPixels < ~leftmostX) {
      document.querySelector('.app').style.backgroundPosition = `${background.X + stepPixels}px ${background.Y}px`;
    }
  }

  //right
  if (e.keyCode === 39) {
    if (character.Y !== characterYRight) {
      document.querySelector('.character').style.backgroundPosition = `${character.X}px ${characterYRight}px`;
    }

    if (background.X - stepPixels > ~rightmostX) {
      document.querySelector('.app').style.backgroundPosition = `${background.X - stepPixels}px ${background.Y}px`;
    }
  }

}
document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('.app').style['background-position-x'] = `-${(2560 - window.screen.width) / 2}px`;
  document.querySelector('.app').style['background-position-y'] = `-${(1600 - window.screen.height) / 2}px`;
});
document.onkeydown = checkKey;
