
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
    console.log(typeof(time))
    return time;
}

displayTime()




const clickPokeball = document.querySelector('#pokeBall')

async function testingAgain(e) {
    const resetPokeball = displayTime(); 

    let testing = Math.floor((Math.random() * 385) + 1);
    console.log(testing)
    console.log(e)
    console.log(e.target)
    const randomPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + testing)
    const grabPokemon = await randomPokemon.json();
    console.log(grabPokemon)
    const displayPokemon = grabPokemon.sprites.front_default;
    // console.log(displayPokemon)
    
    const removePokeball = document.querySelector('#pokeBall')
    removePokeball.src = displayPokemon;
    removePokeball.style.animation = 'none';
    clickPokeball.disabled = true;
    // if(e.button === 0){
    //     let text = "You pressed button: " + e.button;
    //     console.log(text)
    //     console.log('FUCK YOU')
    //     clickPokeball.removeEventListener('click', testingAgain)
    //     // document.getElementById("pokeBall").disabled = true;
    //     // removePokeball.disabled = true; 

    // }

    clickPokeball.removeEventListener('click', testingAgain)

    // THIS IS FOR RESETING POKEMON OF THE DAY
    // if(resetPokeball > '4:38:00 PM'){
    //     console.log('TESTING')
    //     clickPokeball.addEventListener('click', testingAgain)
    // }
    // if(resetPokeball > '4:51:00 PM' && resetPokeball <= '4:51:30 PM'){
    //     console.log('TESTING 2')
    //     clickPokeball.addEventListener('click', testingAgain)
    // }else{
    //     console.log('not working')
    // }
    
}

clickPokeball.addEventListener('click', testingAgain)

//THIS IS FOR RESETING POKEMON OF THE DAY
// I'm currently trying to figure how to to make
//sure that the button becomes undisabled on the next day
//so that the user can get a new pokemon 


let testing2 = displayTime()
console.log(testing2)

setInterval(() => {
    displayTime()
    // if(testing2 > '4:48:00 PM' && testing2 <= '4:49:00 PM'){
    //     console.log('TESTING 2')
    //     clickPokeball.addEventListener('click', testingAgain)
    // }else{
    //     console.log('not working')
    // }
}, 1000)

// if(testing2 > '4:49:00 PM' && testing2 <= '4:50:00 PM'){
//     console.log('TESTING 2')
//     clickPokeball.addEventListener('click', testingAgain)
// }else{
//     console.log('not working')
// }


// if(testing2 >= '4:34:30 PM'){
//     console.log('TESTING 2')
//     clickPokeball.addEventListener('click', testingAgain)
// }else{
//     console.log('not working')
// }
































// const getRandomPokemon = async () => {
//     const getRandomNumber = Math.floor((Math.random() * 385) + 1)
//     // console.log(getRandomNumber)
//     const getInfo = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomNumber}`)
//     const overallPokeInfo = await getInfo.json();
//     // console.log(overallPokeInfo)  
//     const thisPokeSprite = overallPokeInfo.sprites.front_default;
//     console.log(getRandomNumber, ':' , thisPokeSprite)  
// }


// getRandomPokemon();
// getRandomPokemon();
// getRandomPokemon();
