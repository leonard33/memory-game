const cardArray = [
    {
        name: "fries",
        img: './assets/fries.png'
    },
    {
        name: "hotdog",
        img: './assets/hotdog.png'
    },
    {
        name: "cheeseburger",
        img: './assets/cheeseburger.png'
    },
    {
        name: "ice cream",
        img: './assets/ice-cream.png'
    },
    {
        name: "milkshake",
        img: './assets/milkshake.png'
    },
    {
        name: "pizza",
        img: './assets/pizza.png'
    },
    {
        name: "fries",
        img: './assets/fries.png'
    },
    {
        name: "hotdog",
        img: './assets/hotdog.png'
    },
    {
        name: "cheeseburger",
        img: './assets/cheeseburger.png'
    },
    {
        name: "ice cream",
        img: './assets/ice-cream.png'
    },
    {
        name: "milkshake",
        img: './assets/milkshake.png'
    },
    {
        name: "pizza",
        img: './assets/pizza.png'
    }
    
]

cardArray.sort(()=> 0.5-Math.random());  //MAKE THE ARRAY RANDOM FOR GAME CHOOSING
console.log(cardArray);

const gridDisplay = document.querySelector('#grid');
const score = document.querySelector('#score');

let choosenCard=[];
let choosenCardId =[];
let cardsWon = [];

// CREATIN THE BOARD / GRID
function createBoard(){
    for(let i=0; i<cardArray.length; i++){
       const card= document.createElement('img');
       card.classList.add('card')
       card.setAttribute('src','assets/blank.png')
       card.setAttribute('data-id',i)
       card.addEventListener('click',flipcard)
       gridDisplay.appendChild(card)
    }   
}
createBoard()

//CREATIN CARD FLIPCARD
function flipcard(){
    const cardId = this.getAttribute('data-id')  //geting the card ID from the grid  : "this." refers to card in the grid
    choosenCard.push(cardArray[cardId].name) //attaching the cardarray with card and pushing it in an array for comparison
    console.log(choosenCard)
    choosenCardId.push(cardId); // FINDING THE CARDS BY THEIR ID
    console.log(choosenCardId)
    this.setAttribute('src',cardArray[cardId].img)  //assigning the images to the grid card
    if (choosenCard.length==2){
        setTimeout(checkMatch, 500)
    }
}
function checkMatch(){
    const gridcards = document.querySelectorAll('img') //get all the cards images in the grid
    console.log(gridcards)
    console.log('check for matched')
    if(choosenCardId[0]== choosenCardId[1]){
        gridcards[choosenCardId[0]].setAttribute('src','assets/blank.png')
        gridcards[choosenCardId[1]].setAttribute('src','assets/blank.png')
        alert('you have cosen the same card')
    }
   
    if(choosenCard[0]== choosenCard[1]){  //check if chosen cards are alike
        alert('you got a match')
        gridcards[choosenCardId[0]].setAttribute('src','assets/white.png')  //use card ids to set attribute
        gridcards[choosenCardId[1]].setAttribute('src','assets/white.png')
        gridcards[choosenCardId[0]].removeEventListener('click',flipcard)  //Remove the event listeners after matchso as no to be clicked again
        gridcards[choosenCardId[1]].removeEventListener('click',flipcard)
        cardsWon.push(choosenCard);
    }else {
        gridcards[choosenCardId[0]].setAttribute('src','assets/blank.png')  //flip them back if not a match
        gridcards[choosenCardId[1]].setAttribute('src','assets/blank.png')
        alert('sorry try again')
    }
     score.textContent = cardsWon.length
    // START THE WHOLE PROCESS AGAIN
     choosenCard=[];
     choosenCardId =[];

     if(cardsWon.length== cardArray.length/2){
         score.innerHTML = 'Congratulations you Won'
     }
}

