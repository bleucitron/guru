"use strict";
var audios = document.getElementsByTagName("audio");
var newAudios = [...audios];

function playRandom() {

  if (newAudios.length === 0) {
    newAudios = [...audios];
    console.log('Reset');
  }

  const number = Math.floor(Math.random() * newAudios.length);
  var song = newAudios.splice(number, 1)[0];

  console.log('Start', song.getAttribute('id'));
  console.log('Left', newAudios.map(a => a.getAttribute('id')));

  song.play();
  song.addEventListener('ended', e => {console.log('End'); playRandom()});
}

playRandom();
