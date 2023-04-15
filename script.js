"use strict";

const menu = document.querySelector('#list');

const menuv2 = document.querySelector('.menuv2');

// Opens main menu
menuv2.addEventListener('click', function () {
    menu.classList.remove('hidden');
    menuv2.classList.add('hidden');
});

// Closes main menu
document.querySelector('.back').addEventListener('click', function () {
    menu.classList.add('hidden');
    menuv2.classList.remove('hidden');
}); 