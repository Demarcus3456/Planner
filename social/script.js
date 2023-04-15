'use scrict'

const insta = document.querySelector('.insta');
const fashion = document.querySelector('.fashion');
const overlay = document.querySelector('.overlay');
const main = document.querySelector('.mainpopup');
const main2 = document.querySelector('.mainpopup2');
const popup = document.querySelector('.popup');
const popup2 = document.querySelector('.popup2');
const popup3 = document.querySelector('.popup3');
const locate = document.querySelector('.location');
const us = document.querySelector('.us');
const state = document.querySelector('.states');
const shirt = document.querySelector('.shirt');
const brand = document.querySelector('.brand');
const versace = document.querySelector('.ver');
const shirts = document.querySelector('.shirts');


// Opens Instagram popup
insta.addEventListener('click', function () {
    main.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

// Opens country's popup
locate.addEventListener('click', function () {
    popup.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

// Opens states popup
us.addEventListener('click', function () {
    popup2.classList.remove('hidden');
    popup.classList.add('hidden');
});

// Opens city popup
state.addEventListener('click', function () {
    popup3.classList.remove('hidden');
    popup2.classList.add('hidden');
});

// Close Instagrm popup
overlay.addEventListener('click', function () {
    main.classList.add('hidden');
    overlay.classList.add('hidden');
});

// Close country popup
overlay.addEventListener('click', function () {
    popup.classList.add('hidden');
    overlay.classList.add('hidden');
});

// Close states popup
overlay.addEventListener('click', function () {
    popup2.classList.add('hidden');
    overlay.classList.add('hidden');
});

// Close city popup
overlay.addEventListener('click', function () {
    popup3.classList.add('hidden');
    overlay.classList.add('hidden');
});

// Opens Fashion popup
fashion.addEventListener('click', function () {
    main2.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

// Close Instagrm popup
overlay.addEventListener('click', function () {
    main2.classList.add('hidden');
    overlay.classList.add('hidden');
});

// Opens up band page
shirt.addEventListener('click', function () {
    brand.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

// Closes up brand popup
overlay.addEventListener('click', function () {
    brand.classList.add('hidden');
    overlay.classList.add('hidden');
});

// Opens versace shirts page
versace.addEventListener('click', function () {
    shirts.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

// Closes up versace shirts popup
overlay.addEventListener('click', function () {
    shirts.classList.add('hidden');
    overlay.classList.add('hidden');
});
