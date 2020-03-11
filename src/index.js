console.log('%c HI', 'color: firebrick')

  function renderDogs(json){
      const dIC = document.getElementById("dog-image-container");
      json.message.forEach(dog => {
            dIC.innerHTML += `<li><img src=${dog}></li>`;
    })

}
function fetchDogs(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderDogs(json));
  }


function renderBreeds(json) {
    const dogBreeds = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById("breed-dropdown")
    for (const breed in json.message){
        dogBreeds.innerHTML += `<li>${breed}</li>`;
    }
    dogBreeds.addEventListener("click", event => {
        event.target.style.color = 'green'
    })
    breedDropdown.addEventListener("change", event => {
        dogBreeds.innerHTML = ""
        for (const breed in json.message){
            if (breed[0] === event.target.value){
                dogBreeds.innerHTML += `<li>${breed}</li>`;
            }
        }
    })
  }


  function fetchBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((json) => renderBreeds(json));
}

function filterBreeds(){
    const dIC = document.getElementById("dog-image-container");
    console.log(dIC)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchDogs();
    fetchBreeds();
  })