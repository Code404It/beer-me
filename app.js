document.addEventListener('DOMContentLoaded', () =>{
    const startButton = document.querySelector('beer-me-button')
    const beerMe = document.querySelector('.beer-me')
    const descriptionDisplay = document.querySelector('.description')
    
    function getBeer(e){
        e.preventDefault()
        fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => {
           return response.json()
        })
        .then(data => {
           const name = data[0].name
           const description = data[0].description
           const {volume} = data[0]
           const volumeValue =volume.value
           const volumeUnit = volume.unit
  
           beerMe.innerHTML = name + '' + volumeValue + volumeUnit
           descriptionDisplay.innerHTML = description
        })



    }

    startButton.addEventListener('click', getBeer)

})