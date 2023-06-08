"use strict";

const start = document.querySelector('.start');
const wim = document.querySelector('.wim');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

// Starts the Wim Hof Man audio
start.addEventListener('click', function () {
    wim.play();
});

// Stops the Wim Hof Man audio
stop.addEventListener('click', function () {
    wim.pause();
});

// Resets the Wim Hof Man audio
reset.addEventListener('click', function () {
    wim.currentTime = 0;
    wim.pause();
});