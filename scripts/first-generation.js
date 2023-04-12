
const pokemon_URL = 'https://pokeapi.co/api/v2/pokemon/'; 
// const parentContainer = document.querySelector('#pokemonImg');
// const childContainer = document.createElement('img')
// childContainer.setAttribute('id', 'pokeIMG')
// console.log(childContainer);

// instead of continusly adding a new Element, just have it in the global
//scope to prevent that from happening 


const displayAPIInfo = async () =>{
        // const grabPokemon = document.querySelector('#grabPokemon')
        const grabValue = await fetch(`${pokemon_URL}${1}`)
        const placeValue = await grabValue.json();
        console.log(placeValue.sprites.back_default)
        return placeValue;
}

displayAPIInfo(); 

const mapOutPokemon = async () => {
// this is what I am currently working on 

    for(let i=1; i <= 151; i++){
        const grabValue = await fetch(`${pokemon_URL}${i}`)
        const placeValue = await grabValue.json();
        const pokemon = placeValue;
        const parentContainer = document.querySelector('#pokemonImg');
        const childContainer = document.createElement('img')
        const childContainerNum = document.createElement('span')
        childContainerNum.style.textAlign = 'center';
        childContainerNum.style.display = 'inline'
        childContainerNum.innerText = i


        const borderSquare = document.createElement('div')

        borderSquare.setAttribute('class', 'borders')

        // childContainer.setAttribute('id', 'pokeIMG')
        let pokemonSprite = pokemon.sprites.front_default;
        // console.log(pokemon.sprites)
        const pokemonID = pokemon.id 

        childContainer.src= pokemonSprite

        childContainer.setAttribute('id', `pokeIMG${i}`)
        borderSquare.append(childContainer)
        borderSquare.append(childContainerNum)
        parentContainer.append(borderSquare)

        const hoverOverPokemon = document.querySelector(`#pokeIMG${i}`)

        hoverOverPokemon.addEventListener('mouseover', ()=> {
            
            pokemonSprite = pokemon.sprites.back_default; 
            childContainer.src= pokemonSprite
           
        })

        hoverOverPokemon.addEventListener('mouseout', () => {
            
            pokemonSprite = pokemon.sprites.front_default;
            childContainer.src= pokemonSprite
        })

        hoverOverPokemon.addEventListener('click', () => morePokeInfo(pokemonID))

        // I'm trying to replace this function with code inside the for loop
        // pokemonImg(pokemonSprite);

    }

}


function morePokeInfo(id){    
    window.location.href = `/pages/detail2.html?id=${id}`
}
const grabInfo = document.querySelector('#clickBtn')


mapOutPokemon()

