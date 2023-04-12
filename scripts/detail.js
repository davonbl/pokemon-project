console.log('you made it to the different page')

const goBackBtn = document.querySelector('#goBack');

goBackBtn.addEventListener('click', ()=> {
    // console.log(window.location.href); 
    // console.log(window.history.back())
    window.history.back(); 
    // window.location.href = `first-generation.html`
})

//I am able to grab the id of the pokemon as a query
//this is something that I need to review next time
//next is to map out a pokemon Image that is in reference to the pervious page
//I also need to see how I can use local storage to make sure that the pokemon is 
//still present on the page 

const body = document.querySelector('body')

const mainContainer = document.createElement('div');
mainContainer.setAttribute('id', 'mainContainer')

const img = document.createElement('img');
img.setAttribute('id', 'pokemonImg')

// console.log(window.location.search)

const grabtheID = new URLSearchParams(window.location.search)
const pokemon_ID = grabtheID.get('id')

// console.log(pokemon_ID); 

const pokemonDetail_URL = `https://pokeapi.co/api/v2/pokemon/${pokemon_ID}`

const showcasePokemon = async() => {
    const grabInfo = await fetch(pokemonDetail_URL);
    const translateInfo = await grabInfo.json();
    console.log(translateInfo)
    return translateInfo; 
}

const displayPokemonInfo = async () => {
    const mappingOutPokemon = await showcasePokemon();
    const pokeDetailImages = mappingOutPokemon.sprites.other.dream_world.front_default
    // why does it say object object when inside a string even though I am using an operator,
    //verus when it is by itself? 
    // console.log(`${pokeDetailImages}`)
    console.log(pokeDetailImages)
    img.src = pokeDetailImages
    mainContainer.appendChild(img)
    body.appendChild(mainContainer)
}

showcasePokemon(); 
displayPokemonInfo(); 