let breeds = [];

document.addEventListener('DOMContentLoaded', function () {
  loadImages();
  // putShitOnPage();
});

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  // const imgUrl = "http://api.open-notify.org/astros.json";
  fetch (imgUrl)
    .then (resp => resp.json())
    // no ';' after first .then statement as it's not the actual end of the fetch statement
    .then (result => {
      // .message is from the json, it's the key name
      // .forEach is a free loop method (or function)
      result.message.forEach(image => addImage(image))
    });
};

function addImage(imgUrl) {
  let container = document.getElementById('dog-image-container');
  let newImgEl = document.createElement('img');
  // 'img' is the HTML tag I want to create
  newImgEl.src = imgUrl;
  // .src relates to the HTML tag created, so it's relative to tag
  container.appendChild(newImgEl);
};

// below is a test reversed refactor of the above 2 functions
// this is closer to how i would build it out on the first pass
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function putShitOnPage () {
//   const imgUrl = "http://api.open-notify.org/astros.json";
//   fetch (imgUrl)
//   .then (resp => resp.json())
//   .then (result => result.people.forEach(anything => {
//     let container = document.getElementById('dog-image-container');
//     let newImgEl = document.createElement('p');
//     newImgEl.innerHTML = `${imgUrl.name}, on the ${imgUrl.craft}`;
//     container.appendChild(newImgEl);
//   }))
// };