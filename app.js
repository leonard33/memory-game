const cardArray = [
    {
        name: "fries",
        img: '/assets/fries.png'
    },
    {
        name: "hotdog",
        img: '/assets/hotdog.png'
    },
    {
        name: "cheeseburger",
        img: '/assets/cheeseburger.png'
    },
    {
        name: "ice cream",
        img: '/assets/ice-cream.png'
    },
    {
        name: "milkshake",
        img: '/assets/milkshake.png'
    },
    {
        name: "pizza",
        img: '/assets/pizza.png'
    },
    {
        name: "fries",
        img: '/assets/fries.png'
    },
    {
        name: "hotdog",
        img: '/assets/hotdog.png'
    },
    {
        name: "cheeseburger",
        img: '/assets/cheeseburger.png'
    },
    {
        name: "ice cream",
        img: '/assets/ice-cream.png'
    },
    {
        name: "milkshake",
        img: '/assets/milkshake.png'
    },
    {
        name: "pizza",
        img: '/assets/pizza.png'
    }
    
]

cardArray.sort(()=> 0.5-Math.random());  //MAKE THE ARRAY RANDOM FOR GAME CHOOSING
console.log(cardArray);

const gridDisplay = document.querySelector('#grid');

let choosenCard=[];

// CREATIN THE BOARD / GRID
function createBoard(){
    for(let i=0; i<cardArray.length; i++){
       const card= document.createElement('img');
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
    this.setAttribute('src',cardArray[cardId].img)  //assigning the images to the grid card
    console.log(choosenCard)
}

