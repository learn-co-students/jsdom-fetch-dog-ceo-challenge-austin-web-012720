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