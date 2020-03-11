/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
function renderDogs(json) {
  const dogImageContainer = document.getElementById('dog-image-container');
  json.message.forEach((dog) => {
    dogImageContainer.innerHTML += `<img src=${dog}>`;
  });
}

function fetchDogs() {
  fetch('https://dog.ceo/api/breeds/image/random/6')
    .then((resp) => resp.json())
    .then((json) => renderDogs(json));
}

function renderBreeds(json) {
  const dogBreeds = document.getElementById('dog-breeds');
  const breedDropdown = document.getElementById('breed-dropdown');

  for (const breed in json.message) {
    dogBreeds.innerHTML += `<li>${breed}</li>`;
  }
  dogBreeds.addEventListener('click', (event) => {
    event.target.style.color = 'cyan';
  });

  breedDropdown.addEventListener('change', (event) => {
    dogBreeds.innerHTML = '';
    for (const breed in json.message) {
      if (breed[0] === event.target.value) {
        dogBreeds.innerHTML += `<li>${breed}</li>`;
      }
    }
  });
}

function fetchBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then((resp) => resp.json())
    .then((json) => renderBreeds(json));
}

document.addEventListener('DOMContentLoaded', () => {
  fetchDogs();
  fetchBreeds();
});
