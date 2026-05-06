// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById("voice-select");
  const button = document.querySelector("button");

  populateVoices();
  speechSynthesis.onvoiceschanged = populateVoices;
  button.addEventListener("click", speakText);
}
let voices = [];

function populateVoices() {
  const voiceSelect = document.getElementById("voice-select");
  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = `
    <option value="select" disabled selected>Select Voice:</option>
  `;
  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

function speakText() {
  const text = document.getElementById("text-to-speak").value;
  const voiceSelect = document.getElementById("voice-select");
  const faceImage = document.querySelector("#explore img");
  if (!text.trim()) return;
  const utterance = new SpeechSynthesisUtterance(text);
  const selectedVoice = voices[voiceSelect.value];
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  utterance.onstart = () => {
    faceImage.src = "assets/images/smiling-open.png";
  };

  utterance.onend = () => {
    faceImage.src = "assets/images/smiling.png";
  };

  speechSynthesis.speak(utterance);
}