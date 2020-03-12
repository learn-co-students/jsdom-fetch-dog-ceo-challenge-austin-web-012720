// Event target is the thing that is sending the event

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const breeds = [];

// Show images on the page 
function renderImages(message) {
    const dogimagecontainer = document.getElementById("dog-image-container");
    message.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        dogimagecontainer.appendChild(img);
    });
}

// Create the breeds from the JSON file
function createBreeds(json) {
    json.forEach(breed => {
        breeds.push(breed);
    });
}

// Show the list of breeds on the page
function renderBreeds(breedList) {
    const breedUL = document.getElementById("dog-breeds");
    breedUL.innerHTML = '';

    breedList.forEach(breed => {
        const newListItem = document.createElement("li");
        newListItem.appendChild(document.createTextNode(breed));
        newListItem.addEventListener("click", event => {
            event.target.style.color = "teal";
        });
        breedUL.appendChild(newListItem);
    });
}

// Grab the images from a JSON
function fetchImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json.message));
};

// Grab the breeds from a JSON
function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        createBreeds(Object.keys(json.message));
        renderBreeds(breeds);
    });
}

// Run these methods when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchImages();
    fetchBreeds();

    // Listen for a change to the dropdown menu
    const dropDown = document.getElementById('breed-dropdown');
    dropDown.addEventListener('change', event => {
    renderBreeds(event.target.value)
   })
});