console.log('%c HI', 'color: firebrick')

let allBreeds = [];

document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    const div = document.getElementById('dog-image-container');
    const ul = document.getElementById('dog-breeds');
    const dropDown = document.getElementById('breed-dropdown');

    dropDown.addEventListener("change", () => {
        let letter = dropDown.value;
        sortBreeds(letter);
        
    })

    let result = fetch(imgUrl).then(resp => resp.json())
    .then(imgs);

    let dogBreeds = fetch(breedUrl).then(resp => resp.json())
    .then(breeds);
    
    function imgs(args) {
        let obj = args.message;
        obj.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            div.appendChild(img);
        })
       
    }

    function breeds(args) {
        allBreeds = args.message
        let obj = args.message;
        console.log(obj)

        for(const key in obj) {
            dog = key;
            const li = document.createElement('li');
            li.innerText = dog;
            li.addEventListener('click', () => {
                li.style.color = "blue";
            });

            ul.appendChild(li);
        }

        
    }

    function sortBreeds(letter) {
    
        let lists = ul.children;

        ul.innerHTML = '';

        for(const breed in allBreeds) {
            if (breed[0] == letter) {
                const li = document.createElement('li');
                li.innerText = breed;
                li.addEventListener('click', () => {
                    li.style.color = "blue";
                });
                ul.appendChild(li);
            } 
           
        }
     }

    

})


