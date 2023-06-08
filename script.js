"use strict";

const menu = document.querySelector('#list');
const menuv2 = document.querySelector('.menuv2');
const career = document.querySelector
    ('.career');
const overlay = document.querySelector('.overlay');
const main = document.querySelector('.main');

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

// Opens career main task page
career.addEventListener('click', function () {
    main.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

// Closes main task popup
overlay.addEventListener('click', function () {
    main.classList.add('hidden');
    overlay.classList.add('hidden');
});





// JavaScript code to handle the popup functionality
function openPopup() {
    document.querySelector('.popup-overlay').style.display = 'flex';
}

function closePopup() {
    document.querySelector('.popup-overlay').style.display = 'none';
}

function openSettingsPopup() {
    document.querySelector('.settings-popup').style.display = 'flex';
}

function closeSettingsPopup() {
    document.querySelector('.settings-popup').style.display = 'none';
}

function deleteHabit(habitElement) {
    habitElement.parentElement.remove();
}

function deleteTask(taskElement) {
    taskElement.parentElement.remove();
}

function toggleSubtasks(checkbox) {
    const subtaskInputsDiv = document.getElementById('subtask-inputs');
    if (checkbox.checked) {
        subtaskInputsDiv.style.display = 'block';
    } else {
        subtaskInputsDiv.style.display = 'none';
    }
}

function addSubtaskInput() {
    const subtaskInputsDiv = document.getElementById('subtask-inputs');
    const subtaskInput = document.createElement('input');
    subtaskInput.type = 'text';
    subtaskInput.className = 'subtask-input';
    subtaskInput.placeholder = 'Name of subtask';
    subtaskInputsDiv.appendChild(subtaskInput);
}


function saveSettings() {
    const type = document.getElementById('type-select').value;
    const name = document.getElementById('name-input').value;
    const subtasks = document.getElementById('subtasks-checkbox').checked;
    const completion = document.getElementById('completion-checkbox').checked;
    const link = document.getElementById('link-input').value;

    // Create a new habit or task element based on the selected type
    const habitTaskElement = document.createElement('div');
    habitTaskElement.className = (type === 'habit') ? 'habit' : 'task';

    // Create and append the name element
    const nameElement = document.createElement('span');
    nameElement.className = (type === 'habit') ? 'habit-name' : 'task-name';
    nameElement.textContent = name;
    habitTaskElement.appendChild(nameElement);

    // Create and append the delete element
    const deleteElement = document.createElement('span');
    deleteElement.className = (type === 'habit') ? 'habit-delete' : 'task-delete';
    deleteElement.textContent = 'x';
    deleteElement.onclick = function () {
        (type === 'habit') ? deleteHabit(this) : deleteTask(this);
    };
    habitTaskElement.appendChild(deleteElement);

    // If subtasks are enabled, create and append the subtask list
    if (subtasks && type === 'habit') {
        const subtaskList = document.createElement('ul');
        // Loop through the subtask input fields and create list items for each
        const subtaskInputs = document.getElementsByClassName('subtask-input');
        for (let i = 0; i < subtaskInputs.length; i++) {
            const subtaskInput = subtaskInputs[i];
            if (subtaskInput.value.trim() !== '') {
                const subtaskListItem = document.createElement('li');
                subtaskListItem.textContent = subtaskInput.value;
                subtaskList.appendChild(subtaskListItem);
            }
        }
        habitTaskElement.appendChild(subtaskList);
    }

    // Append the new habit/task element to the list
    document.querySelector('.habit-task-list').appendChild(habitTaskElement);




    closeSettingsPopup();
}