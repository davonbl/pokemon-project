const pokemon_URL = `https://pokeapi.co/api/v2/pokemon/`;
// const body = document.querySelector('body')

const grabData = () => {

    for(let i= 252; i <= 385; i++ ){
    fetch(pokemon_URL + i).then((res) => {
            return res.json()
        }).then((data)=> {
            // console.log(data)
            // console.log(i)
            showPokemon(data, i)
            
        }).catch((err)=> {
            console.log(err)
        })
    }
}


function showPokemon(data, number){
    // console.log(data)
    // console.log(data.sprites.front_default)
    const body = document.querySelector('body')
    const pokemon_ID = data.id

    const placeImage = document.createElement('img')
    placeImage.src = data.sprites.front_default

    const mainContainer = document.querySelector('#pokemonImg')
    // mainContainer.setAttribute('class', 'borders')


    const subContainer = document.createElement('div')
    subContainer.setAttribute('class', 'borders')
    subContainer.append(placeImage)

    const spanNumber = document.createElement('span')
    spanNumber.innerText = number; 
    subContainer.append(spanNumber)

    mainContainer.append(subContainer)
    body.append(mainContainer)

    subContainer.addEventListener('click',() => clickPokemon(pokemon_ID) )

    subContainer.addEventListener('mouseover',()=> {
        console.log('mouseover')
        placeImage.src = data.sprites.back_default
    } )

    subContainer.addEventListener('mouseout',()=> {
        console.log('mouseout')
        placeImage.src = data.sprites.front_default
    } )

    const loader = document.querySelector('.loader');
    loader.classList.add("loader-hidden");
}

grabData();


function clickPokemon(id){
   
        // console.log('click')
        // console.log(window.location.href)
        // console.log(id)
        window.location.href = `/pages/detail2.html?id=${id}`
    
}
// showPokemon(); 