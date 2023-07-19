
const body = document.querySelector('body'); 
// console.log('testing')

const goBackBtn = document.querySelector('#goBack')

const grabURL = new URLSearchParams(window.location.search)
const grabtheID = grabURL.get('id')

console.log(grabURL)
console.log(grabtheID)

// const testingWindow = window.location.search
// const testingURL = new URLSearchParams(window.location.search.substring(window.location.search('?')))
// testingURL.sort()

//.substring
// console.log(grabURL.sort())

// console.log('Sorted testingURL: ',testingURL );

goBackBtn.addEventListener('click', ()=> {
    // console.log('go back')
    window.history.back()
})


const pokemonDetails = async() => {
    const data = await fetch (`https://pokeapi.co/api/v2/pokemon/${grabtheID}`)
    const pokemon = await data.json()

    const pokemonContainer = document.createElement('img')
    const pokemonIMG = pokemon.sprites.other.dream_world.front_default;

    pokemonContainer.src = pokemonIMG;

    const mainContainer = document.createElement('div')

    mainContainer.append(pokemonContainer)
    body.append(mainContainer)

    let grabPokemon = pokemon.types

    const pokemonType = document.createElement('p')
    pokemonType.innerText = 'Type: '
    mainContainer.append(pokemonType)
    // console.log(pokemon)
    //[0].type.name
    console.log(grabPokemon)
    grabPokemon.forEach((element) => {
        const pokemonShow = document.createElement('p');
        const description = element.type.name
        pokemonShow.innerText = description.charAt(0).toUpperCase() + description.substring(1)
        mainContainer.append(pokemonShow)
        console.log(element)
        // [console.log(description.charAt(0).toUpperCase() + description.substring(1))]
    })


    console.log("Show the Pokemon: ",  grabPokemon)

    ///////////////////////////////////////

    const data2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${grabtheID}`);
    // const data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${grabtheID}`);
    const grabDetails = await data2.json();
    console.log(grabDetails.flavor_text_entries)
    console.log(!grabDetails.flavor_text_entries[0].language.name.includes('en'))

    const textIsEnglish = !grabDetails.flavor_text_entries[0].language.name.includes('en')

    console.log(grabDetails.flavor_text_entries[0].flavor_text)

    let pargraph = grabDetails.flavor_text_entries[0].flavor_text

    const placeText = document.createElement('p')

    placeText.innerText = pargraph

    // const testing = pargraph.split(' ');
    if(textIsEnglish){
        console.log("doesn't have it")
        pargraph = grabDetails.flavor_text_entries[1].flavor_text

        // const placeText = document.createElement('p')
    
        placeText.innerText = pargraph
    }

  
    // console.log(testing[8])
    

    // console.log(testing[8].replace('\f', ' '))
    // console.log(pargraph.replace('\f', ' '))

    // placeText.innerText = pargraph.replace('\f', ' ')
    if(pargraph.includes('\f')){
        // console.log('it has it')
        // pargraph.replace('\f', 'hello')
        placeText.innerText = pargraph.replace('\f', ' ')
    }

    console.log(placeText.children)
    console.log(placeText.innerHTML.includes('<br>'))

    if(placeText.innerHTML.includes('<br>')){
        // console.log('hello')
        placeText.innerText = placeText.innerHTML.replaceAll('<br>', ' ')
    }
//    placeText.includes(' ')

    // const grabIt = document.querySelector('br')
    // // placeText.removeChild(grabIt)
    // placeText.innerText = placeText.removeChild(grabIt)
    // console.log(placeText.innerHTML)
    // const removeBR = pargraph.children()
    // console.log(removeBR)

    // if(placeText.children){
    //     placeText.innerHTML = ''
    // }



    mainContainer.append(placeText)

    
}

const pokemonDetails2= async()=> {
    //pokemon-species/${id}---> 
    //flavor_text_entries.6.flavor_text; 
    //form_descriptions.description

    const data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${grabtheID}`);
    // const data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${grabtheID}`);
    const grabDetails = await data.json();
    console.log(grabDetails.flavor_text_entries[0].flavor_text)

    const placeText = document.createElement('p')
    // console.log(grabDetails.evolution_chain.url)
    // console.log(grabDetails.form_descriptions.description)

    // const eChainLink = grabDetails.evolution_chain.url

    // const chainData = await fetch(eChainLink)
    // const displayChainData = await chainData.json();
    // console.log(displayChainData)
}

pokemonDetails()
// pokemonDetails2()


// To reset pokemon of the day 


const getHours = () => {
    let date = new Date();
    let hour = date.getHours()
    
    if(hour > 12){
        hour = hour - 12;
    }
    return hour;
}

const getAmOrPm = () => {
    let date = new Date();
    let hour = date.getHours();
    let amOrPm = 'AM'

    if(hour > 12){
        amOrPm = 'PM'
    }
    return amOrPm
}

const getMinutes = () => {
    let date = new Date();
    let mintues = date.getMinutes();

    if(mintues < 10){
        mintues = '0' + mintues
    }

    return mintues;
}

const getSeconds = () => {
    let date = new Date()
    let seconds = date.getSeconds();

    if(seconds < 10){
        seconds = '0' + seconds;
    }

    return seconds;
}

const getTime = () => {
    let hours = getHours();
    let mintues = getMinutes();
    let seconds = getSeconds();
    let amOrPm = getAmOrPm();

    let time = `${hours}:${mintues}:${seconds} ${amOrPm}`

    console.log(time);
    return time;
}

getTime(); 

setInterval(()=> {
    let removePokemonObj = getTime(); 
    if(removePokemonObj === '0:00:00 AM'){
        // console.log('stick your middle figners up in the air!!!!!');
        // console.log(localStorage.getItem('Pokemon'));
        localStorage.removeItem('Pokemon')
    }
}, 1000)