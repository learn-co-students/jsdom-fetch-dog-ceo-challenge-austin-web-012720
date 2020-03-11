let dogArray = [];

document.addEventListener('DOMContentLoaded', () => {
  fetchDogs();
  renderDogs();
  fetchBreeds();
  renderBreeds();
  document.addEventListener('click', changeColor);
  const dropDown = document.querySelector('#breed-dropdown');
  dropDown.addEventListener('change', filterBreeds);
});

function fetchDogs() {
  const result = fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((res) => res.json())
    .then((results) => {
      results.message.forEach((image) => renderDogs(image));
    });
}

function renderDogs(dogPicUrl) {
  const container = document.querySelector('#dog-image-container');
  const image = document.createElement('img');
  image.src = dogPicUrl;
  container.appendChild(image);
}

function fetchBreeds() {
  const result = fetch('https://dog.ceo/api/breeds/list/all')
    .then((res) => res.json())
    .then((results) => {
    //   console.log(results.message);
      renderBreeds(results.message);
      dogArray = results.message;
    //   filterBreeds(results.message);
    });
}

function renderBreeds(results) {
  const ul = document.querySelector('#dog-breeds');
  for (const breed in results) {
    const li = document.createElement('li');
    li.innerText = breed;
    ul.appendChild(li);
  }
}

function changeColor() {
  const element = event.target;
  if (element.tagName == 'LI') {
    element.style.color = 'red';
  }
}

function filterBreeds() {
  const letter = event.target.value;
  console.log(letter);
  ul = document.querySelector('#dog-breeds');
  ul.innerHTML = '';
  for (breed in dogArray) {
    if (breed[0] == letter) {
      const li = document.createElement('li');
      li.innerText = breed;
      ul.appendChild(li);
    }
  }
}
