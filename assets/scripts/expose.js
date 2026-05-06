// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // HORN
  const horn = document.getElementById('horn-select');
  horn.addEventListener('change', updt_horn);

  // VOLUME
  const volume = document.getElementById('volume');
  volume.addEventListener('change', updt_volume);

  // BUTTON
  const button = document.querySelector('button');
  button.addEventListener('click', playsound);
}

function updt_horn() {
  //re-query horn
  const horn = document.getElementById('horn-select');
  const h_img = document.querySelector('#expose img');
  const audio = document.querySelector('audio');

  const selected = horn.value;

  h_img.src = 'assets/images/' + selected + '.svg'
  audio.src = 'assets/audio/' + selected + '.mp3'
}

function updt_volume() {
  const slider = document.getElementById('volume');
  const v_icon = document.querySelector('#volume-controls img');
  const audio = document.querySelector('audio');
  const value = slider.value;
  audio.volume = value / 100;
  if (value == 0) {
    v_icon.src = "assets/icons/volume-level-0.svg";
  } else if (value < 33) {
    v_icon.src = "assets/icons/volume-level-1.svg";
  } else if (value < 67) {
    v_icon.src = "assets/icons/volume-level-2.svg";
  } else {
    v_icon.src = "assets/icons/volume-level-3.svg";
  }
}

function playsound() {
  const audio = document.querySelector('audio');
  const horn = document.getElementById('horn-select');
  audio.play();
  if (horn.value === 'party-horn') {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
}