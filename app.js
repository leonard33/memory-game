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

function createBoard(){
    for(let i=0; i<10; i++){
       const card= document.createElement('img');
       card.setAttribute('src','assets/blank.png')
       card.setAttribute('data-id',i)
       gridDisplay.appendChild(card)
    }   
}
createBoard()

