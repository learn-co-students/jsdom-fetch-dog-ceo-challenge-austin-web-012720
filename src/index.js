console.log('%c HI', 'color: firebrick')

let allDogs;
let dogBreeds;

document.addEventListener('DOMContentLoaded', () => {
  fetchDogPics();
  fetchBreedList();
  document.getElementById('breed-dropdown').addEventListener('change', renderBreedByLetter);
});

function fetchBreedList() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then((response) => response.json())
        .then((json) => {
            dogBreeds = json.message;
            renderBreeds();
            
        })
};

function fetchDogPics() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl) 
   .then((response) => response.json())
   .then((json) => {
     allDogs = json.message;
     renderDogs();
   });     
};

function renderBreeds() {
    let listContainer = document.getElementById('dog-breeds');
    for(const breed in dogBreeds) {
        let listItem = document.createElement('li');
        listItem.innerHTML = breed;
        listItem.addEventListener("mouseover", function() {
          listItem.style.color = getRandomColor();
        });
        listContainer.appendChild(listItem); 
    };
};

function renderDogs() {
  let imageContainer = document.getElementById('dog-image-container'); 
  allDogs.forEach(imageURL => {
    let image = document.createElement('IMG');
    image.setAttribute('src', imageURL);
    image.setAttribute('width', 300);
    imageContainer.appendChild(image);
  });
};

function renderBreedByLetter() {
  let dropDownValue = document.getElementById('breed-dropdown').value
  let listContainer = document.getElementById('dog-breeds');
  listContainer.innerHTML = "";
  for(const breed in dogBreeds) {
    console.log(breed)
    if (breed.charAt(0) == dropDownValue){
      let listItem = document.createElement('li');
      listItem.innerHTML = breed;
      listItem.addEventListener("mouseover", function() {
        listItem.style.color = getRandomColor();
      });
      listContainer.appendChild(listItem);
    } 
  };
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};