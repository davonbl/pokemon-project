

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
    }


}


displayPokemon()


function pokemonContent(id){
    // console.log(id)
    
    // window.location.href = ``
    window.location.href = `/pages/detail2.html?id=${id}`
    
}