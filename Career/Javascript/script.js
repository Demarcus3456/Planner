'use strict';

const basic = document.querySelector('.basics');
const challenge = document.querySelector('.challenge');
const fundamentals = document.querySelector('.fundamentals');
const challenges = document.querySelector('.challenges');

// Open the fundamentals page
basic.addEventListener('click', function () {
    fundamentals.classList.remove('hidden');
});

// Opens up challenges
challenge.addEventListener('click', function () {
    challenges.classList.remove('hidden');
});