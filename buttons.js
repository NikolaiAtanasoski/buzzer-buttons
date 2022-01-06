//script wide variables
const buzzer = document.getElementById("buzzer");
const timeOutput = document.getElementById("time-output");
const color = document.currentScript.getAttribute('color');
let audio = null;

function init() {
    initColorOfButton();
    initSoundAndListener();
}

function initSoundAndListener() {
    audioFile = color === "blue" ? 'tada.mp3' : 'ding.mp3';
    audio = new Audio(audioFile);
    buzzer.addEventListener('click', () => playSound());
}

function initColorOfButton() {
    buzzer.style.backgroundColor = color;
}

function onError() {
    const errorMessage = "Browser not supported! No Web Audio API for you :(";
    console.log(errorMessage);
    timeOutput.innerText = errorMessage;
}

function unpress() {
    buzzer.classList.remove("pressed");
}

function playSound() {
    printTime();
    buzzer.classList.add("pressed");
    audio.play();
    var delay = 800;
    setTimeout(unpress, delay);
}

function printTime() {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();
    timeOutput.innerText = time;
}

init();