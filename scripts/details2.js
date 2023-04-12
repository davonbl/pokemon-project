
const body = document.querySelector('body'); 
console.log('testing')

const goBackBtn = document.querySelector('#goBack')

const grabURL = new URLSearchParams(window.location.search)
const grabtheID = grabURL.get('id')

console.log(grabURL)
console.log(grabtheID)

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
        console.log('it has it')
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