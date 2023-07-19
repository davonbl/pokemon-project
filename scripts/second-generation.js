

// const testing = async()=> {
//     const data = await fetch('https://pokeapi.co/api/v2/pokemon/152')
//     const pokemon = await data.json();
//     return pokemon
// }



const displayPokemon = async() => {
    // const pokemon = await testing()
    // console.log(pokemon)

    for(let i= 152; i<=251; i++){

        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const pokemon = await data.json();

        const mainContainer = document.querySelector('#pokemonImg')
        const pokemonContainer = document.createElement('div')
        pokemonContainer.setAttribute('class', 'borders')
        const showPokemon = document.createElement('img')
        
        showPokemon.src = pokemon.sprites.front_default

        const showPokeID = document.createElement('span')
        showPokeID.innerText = pokemon.id

        pokemonContainer.append(showPokemon, showPokeID)
        mainContainer.append(pokemonContainer)

        const pokemon_ID = pokemon.id; 

        showPokemon.addEventListener('mouseover', ()=> {
            showPokemon.src = pokemon.sprites.back_default; 

        })

        showPokemon.addEventListener('mouseleave', ()=> {
            showPokemon.src = pokemon.sprites.front_default; 
        })

        showPokemon.addEventListener('click', () =>{pokemonContent(pokemon_ID)})
        showPokemon.addEventListener('mouseover', () =>{pokemonTesting(pokemon_ID)})

        if(pokemon_ID !== 251){
            console.log('loading')
        } else{
            console.log('finished')
            console.log(pokemon)
            
        }
        // return pokemon; 
        const loader = document.querySelector('.loader');
        loader.classList.add('loader-hidden');
        
    }

    // const loader = document.querySelector('.loader');
    // loader.classList.add("loader-hidden");
    


}


displayPokemon()

function pokemonTesting(id){
    console.log(id)
}


// This is more of the visual loading screen

function pokemonContent(id){
    // console.log(id)
    
    // window.location.href = ``
    window.location.href = `/pages/detail2.html?id=${id}`
    
}

// window.addEventListener('load', () => {
//     alert('finished loading')
// })


// window.addEventListener("load", ()=> {
//     const loader = document.querySelector('.loader');

//     loader.classList.add("loader-hidden");

//     // loader.addEventListener('transitionend', ()=> {
//     //     document.body.removeChild('loader')
//     // })
// })


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