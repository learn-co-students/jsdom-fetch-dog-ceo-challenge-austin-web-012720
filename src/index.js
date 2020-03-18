console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
  console.log('DOM Loaded.')

  fetchDogImages();
  fetchDogBreeds();
  console.log(document.body.style.color);


  document.addEventListener("click", function(){
    changeColor();
  })
});

function fetchDogImages(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      const images = json.message;
      const dogImageContainer = document.getElementById("dog-image-container");
      images.forEach((item, i) => {
        let element = document.createElement("span");
        let image = document.createElement("img");
        image.setAttribute("src", images[i]);
        element.appendChild(image);
        element.innerHTML = `<ul>${element.innerHTML}</ul>`;
        dogImageContainer.appendChild(element);
      })
    });
}

function fetchDogBreeds(){
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';

  fetch(breedUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      const breeds = json.message;
      const list = document.getElementById('dog-breeds');

      for (const key in breeds){
        let mainBreed = document.createElement('li');

        mainBreed.innerHTML = `${key}`
        if (Array.isArray(breeds[key])){
          for (let i = 0; i < breeds[key].length; i++){
            let subBreed = document.createElement('ul');
            subBreed.innerHTML = `<li>${breeds[key][i]} ${key}</li>`;

            if (subBreed.innerHTML != ''){
              mainBreed.appendChild(subBreed);
            }
          }
        }
        if (mainBreed.innerHTML != ''){
          list.appendChild(mainBreed);
        }
      }
    })
}

function changeColor(){
  if (document.body.style.color == '' ||   document.body.style.color == 'purple'){
    document.body.style.color = 'red';
  }
  else if (document.body.style.color == 'red'){
    document.body.style.color = 'purple';
  }
  return false;
}
