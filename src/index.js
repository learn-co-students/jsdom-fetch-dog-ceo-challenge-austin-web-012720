console.log('%c HI', 'color: firebrick')
let breeds = [];
document.addEventListener('DOMContentLoaded', ()=>{
  console.log('Dom loaded!')
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetchImage(imgUrl);
  fetchBreed(breedUrl);
  document.getElementById('breed-dropdown').addEventListener('change', event => {
    console.log(event.target.value);
    const opt = event.target.value;
    const newList = breeds.filter(x => x.startsWith(opt));
    console.log(newList);
    renderBreed(newList);



  });

})
  function renderBreed(array){
    document.getElementById('dog-breeds').innerHTML = ''
   for (const ele in array){
     const li = document.createElement('li');
     li.innerText = array[ele];
     document.getElementById('dog-breeds').appendChild(li);
     breeds.unshift(ele);

   }
   changeColorOnClick();
}
  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  function changeColorOnClick(){
    for (const i of document.querySelectorAll('li')){

      i.addEventListener('click', event=>{event.target.style.color =  randomColors() });
    }
    // document.addEventListener('click', document.querySelectorAll('li').style.color =  randomColors() );
  }
  function fetchBreed(breedUrl){

    fetch(breedUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      for( const key in json['message']){
        const li = document.createElement('li');
        li.innerText = key;
        document.getElementById('dog-breeds').appendChild(li);
        breeds.push(key);
      }
      changeColorOnClick();
    })

  }



  function fetchImage(imgUrl){
  fetch(imgUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(json){



    for (const elem of json['message']){
      const i = document.createElement('img');
      i.src = elem
      document.body.appendChild(i)

    }
  });
}
