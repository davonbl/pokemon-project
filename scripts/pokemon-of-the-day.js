

const getRandomPokemon = async () => {
    const getRandomNumber = Math.floor((Math.random() * 385) + 1)
    // console.log(getRandomNumber)
    const getInfo = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomNumber}`)
    const overallPokeInfo = await getInfo.json();
    // console.log(overallPokeInfo)  
    const thisPokeSprite = overallPokeInfo.sprites.front_default;
    console.log(getRandomNumber, ':' , thisPokeSprite)

    


     
}


getRandomPokemon();
getRandomPokemon();
getRandomPokemon();
