const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let breeds = [];

function createBreeds(json) {
  json.forEach(breed => {
    breeds.push(breed);
  });
}

function renderBreeds(breedList) {
  const breedUL = document.getElementById('dog-breeds');
  breedUL.innerHTML = '';

  breedList.forEach(breed => {
    const newListItem = document.createElement('li');

    newListItem.appendChild(document.createTextNode(breed));
    newListItem.addEventListener('click', event => {
      event.target.style.color = 'blue';
    });

    breedUL.appendChild(newListItem);
  });
}

function renderImages(urlArray) {
  const dogimgs = document.getElementById('dog-image-container');

  urlArray.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    dogimgs.appendChild(img);
  });
}

function fetchBreeds() {
  return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
      createBreeds(Object.keys(json.message));
      renderBreeds(breeds);
    });
}

function fetchImages() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json.message));
}

document.addEventListener('DOMContentLoaded', event => {
  fetchBreeds();
  fetchImages();

  document.getElementById('breed-dropdown').addEventListener('change', event => {
    const newList = breeds.filter(breed => breed.startsWith(event.target.value));
    renderBreeds(newList);
  });
});
