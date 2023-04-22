
const pokemon_URL = 'https://pokeapi.co/api/v2/pokemon/'; 
const previewBubble = document.querySelector('.preview-bubble');
// const parentContainer = document.querySelector('#pokemonImg');
// const childContainer = document.createElement('img')
// childContainer.setAttribute('id', 'pokeIMG')
// console.log(childContainer);

// instead of continusly adding a new Element, just have it in the global
//scope to prevent that from happening 
const body = document.querySelector('body');

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
        // const loader = document.querySelector('.loader');
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

        // console.log(pokemon)
        console.log(pokemon.name) // pokemon.weight
        // console.log(pokemon.types, 'this')
        const types = pokemon.types
        // console.log(pokemon.types[0].type.name)

        //a forEach can be use on array content
        types.forEach((element, index, array)=>{
            console.log(element.type.name)
        })

        // hoverOverPokemon.addEventListener('mouseenter', (id)=> {
            
        //     pokemonSprite = pokemon.sprites.back_default; 
        //     childContainer.src= pokemonSprite

        //     console.log(id)
        //     console.log(id.target.id)


           
        // })

        // /////////////////////////////////

        // hoverOverPokemon.forEach((object)=> {
        //     object.addEventListener('mouseover', ()=> {
        //         console.log('testing')
        //     })
        // })

                    // Update the preview bubble with the preview information
            // previewBubble.textContent = pokemon.previewText;

            // previewBubble.style.top = `${objectRect.top - previewBubble.offsetHeight}px`;
            // previewBubble.style.left = `${objectRect.left + objectRect.width / 2 - previewBubble.offsetWidth / 2}px`;
            // previewBubble.style.display = 'block';


            // ///////////////////////////////////////////////////////////////

        // hoverOverPokemon.addEventListener('mouseout', () => {
            
        //     pokemonSprite = pokemon.sprites.front_default;
        //     childContainer.src= pokemonSprite
        // })

        hoverOverPokemon.addEventListener('click', () => morePokeInfo(pokemonID))
        //creating the loading screen
        // const loadingScreen = document.createElement('div')
        // loadingScreen.setAttribute('class', 'loader')
        if(pokemonID !== 151){
            console.log('loading')
        }else{
            console.log('done')
        }

        // loader.addEventListener('transitionend', () => {
        //   document.body.removeChild(loader);
        // });

        // if(pokemonID ===)

        // I'm trying to replace this function with code inside the for loop
        // pokemonImg(pokemonSprite);

        // this is for previewBox;

        borderSquare.setAttribute('id', `${i}`)

        const briefInfo = document.getElementById(`${i}`)
        briefInfo.addEventListener('mouseover', (id)=> {
            // console.log(id, 'testing NOW')

            //THIS SECTION IS FOR THE PREVIEW BOX
            // previewBubble.textContent = pokemon.previewText;

            // const objectRect = borderSquare.getBoundingClientRect();
            // console.log(objectRect)
            // previewBubble.style.top = `${objectRect.top - previewBubble.offsetHeight}px`;
            // previewBubble.style.left = `${objectRect.left + objectRect.width / 2 - previewBubble.offsetWidth / 2}px`;
            // previewBubble.style.display = 'block';

            // const previewText = document.createElement('p')
            // const previewText2 = document.createElement('p')
            // previewBubble.append(previewText, previewText2)
            // previewText.innerText = pokemon.name
            // previewText2.innerText = pokemon.types[0].type.name


            pokemonSprite = pokemon.sprites.back_default; 
            childContainer.src= pokemonSprite

        })
        briefInfo.addEventListener('mouseout', (id)=> {
            // console.log(id, 'testing LEFT')
            //THIS IS FOR THE PREVIEW BOX
            // previewBubble.style.display = 'none';

            pokemonSprite = pokemon.sprites.front_default;
            childContainer.src= pokemonSprite
        })

        const loader = document.querySelector('.loader');
        loader.classList.add('loader-hidden');

        //how can this work properly 
        // loader.addEventListener('transitionend', ()=> {
        //     document.body.removeChild(loader);
        //     });

    }

}


function morePokeInfo(id){    
    window.location.href = `/pages/detail2.html?id=${id}`
}
const grabInfo = document.querySelector('#clickBtn')


mapOutPokemon()

// window.addEventListener("load", ()=> {
//     const loader = document.querySelector('.loader');

//     loader.classList.add("loader-hidden");

//     loader.addEventListener('transitionend', ()=> {
//         document.body.removeChild('loader')
//     })
// })

// window.addEventListener("load", ()=> {
//     const loader = document.querySelector('.loader');

//     loader.classList.add("loader-hidden");

//     loader.addEventListener('transitionend', ()=> {
//         document.body.removeChild(loader);
//     });
// });

// window.addEventListener('load', () => {
//     alert('finished loading')
// })
