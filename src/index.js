console.log('%c HI', 'color: firebrick')

let allDogs;
let allBreeds;


document.addEventListener('DOMContentLoaded', () => {
    fetchDogs();
    fetchBreeds();
    
  const dropDown = document.getElementById('breed-dropdown');
  
  dropDown.addEventListener('change', event => {
    //console.log(event.target.value);
    renderBreeds(event.target.value)
   })
});

function fetchDogs() {
   const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

   fetch(imgUrl) 
     .then((response) => response.json())
     .then((results) => {
       allDogs = results.message;
       //why does this have to be inside this fetch instead of after
       renderDogs();
     })     
};

function renderDogs() {
  const imageContainer = document.getElementById('dog-image-container'); 
     
  allDogs.forEach(imageURL => {
    let image = document.createElement('IMG');
    image.setAttribute('src', imageURL);
    image.setAttribute('width', 300);
    imageContainer.appendChild(image);
  })
};

function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl) 
      .then((response) => response.json())
      .then((results) => {
          allBreeds = results.message;
          renderBreeds();
    })     
 };

 function renderBreeds(value = "") {
   const listContainer = document.getElementById('dog-breeds');
   //This clears out the list each time renderBreeds is called
   listContainer.innerHTML = "";

   for (const key in allBreeds) {
      if (key.startsWith(value)){
        let li = document.createElement('li');
        li.innerHTML = key;

        li.addEventListener('mouseover', event => {
          event.target.style.color = getRandomColor();  
        });

        listContainer.appendChild(li);
      }
    }

  }

 function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


    

    


