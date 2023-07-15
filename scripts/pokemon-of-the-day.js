let body = document.querySelector('body');
// const getDate = new Date;
// // console.log(getDate)

const getHours = () => {
    const getDate = new Date;
    let showHours = getDate.getHours()

    if(showHours > 12){
        showHours = showHours - 12;
        return showHours
    }
    return showHours
}

const getMintues = () => {
    const getDate = new Date;
    let showMintues = getDate.getMinutes();

    if(showMintues < 10){
        showMintues = '0' + showMintues;
        return showMintues;
    }
    return showMintues
}

const getSeconds = () => {
    const getDate = new Date;
    let showSeconds = getDate.getSeconds();

    if(showSeconds < 10){
        showSeconds = '0' + showSeconds;
        return showSeconds;
    }
    return showSeconds;
}

const getAmOrPm = () => {
    const getDate = new Date;
    let getHours = getDate.getHours();
    let amOrPm = 'AM'
    if(getHours >= 12){
        amOrPm = 'PM';
        return amOrPm;
    }
    return amOrPm; 
}

const displayTime = () => {
    const hours = getHours();
    const mintues = getMintues();
    const seconds = getSeconds();
    const amOrPm = getAmOrPm();

    const time = `${hours}:${mintues}:${seconds} ${amOrPm}`
    console.log(time)
    // console.log(typeof(time))
    return time;
}

displayTime()

if(localStorage.getItem('Pokemon')){
    let getPokeImage = JSON.parse(localStorage.getItem('Pokemon'))
    console.log(getPokeImage)
    console.log(getPokeImage.image)
    let displayPokemon = document.querySelector('#pokeBall')
    displayPokemon.src = getPokeImage.image

    let displayText = document.createElement('p')
    displayText.innerText = getPokeImage.info
    body.append(displayText)
}




const clickPokeball = document.querySelector('#pokeBall')

async function testingAgain(e) {

    if(localStorage.getItem('Pokemon')){
        console.log('you already click on the pokeball')
    }else{
    // const resetPokeball = displayTime(); 

    let testing = Math.floor((Math.random() * 385) + 1);
    // console.log(testing)
    // console.log(e)
    // console.log(e.target)
    const randomPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + testing)
    const grabPokemon = await randomPokemon.json();

    let grabPokemonInfo = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${testing}`)
    let displayPokeInfo = await grabPokemonInfo.json()

    console.log(grabPokemon)
    const displayPokemon = grabPokemon.sprites.front_default;
    console.log('URL-image', displayPokemon)

    // console.log(displayPokemon)
    
    const removePokeball = document.querySelector('#pokeBall')
    removePokeball.src = displayPokemon;
    removePokeball.style.animation = 'none';

    /* This is likely causing me to not be able to click on the pokemon
     but is useless after refreshing the page */
    // clickPokeball.disabled = true;
    
    /* this is where the eventlistener becomes useless */
    // clickPokeball.removeEventListener('click', testingAgain)


    // getting the info of the pokemon

    // document.querySelector

    console.log(displayPokeInfo)
    console.log(displayPokeInfo.flavor_text_entries)
    console.log(displayPokeInfo.flavor_text_entries[0].flavor_text)

    let displayText = document.createElement('p')
    let pokeInfo = displayPokeInfo.flavor_text_entries[0].flavor_text
    displayText.innerText = pokeInfo
    body.append(displayText)


    let todaysPokemon = {
        name: grabPokemon.name,
        info: pokeInfo,
        image: displayPokemon
    }

    if(!localStorage.getItem('Pokemon')){
        localStorage.setItem('Pokemon', JSON.stringify(todaysPokemon))
    }

    }
    
}

clickPokeball.addEventListener('click', testingAgain)

//THIS IS FOR RESETING POKEMON OF THE DAY
// I'm currently trying to figure how to to make
//sure that the button becomes undisabled on the next day
//so that the user can get a new pokemon 


// let testing2 = displayTime()
// console.log(typeof testing2)

setInterval(() => {
    // displayTime()
    let testing3 = displayTime();
    if(testing3 === '0:00:00 AM'){
        localStorage.removeItem('Pokemon');
        document.querySelector('#pokeBall').src = "../images/pokeball.png"
        document.querySelector('p').remove()
        
    }else{
        console.log('not working')
    }
}, 1000)
