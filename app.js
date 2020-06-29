document.addEventListener('DOMContentLoaded', () => {          

    //card options
    const cardArray = [
        {
            name:'dog',
            img: 'images/dogemogi.png'
        },
        {
            name:'dog',
            img: 'images/dogemogi.png'
        },
        {
            name:'panda',
            img: 'images/pandaemoji.png'
        },
        {
            name:'panda',
            img: 'images/pandaemoji.png'
        },
        {
            name:'cat',
            img: 'images/catemoji.png'
        },
        {
            name:'cat',
            img: 'images/catemoji.png'
        },
        {
            name:'dolphin',
            img: 'images/dolphinemoji.png'
        },
        {
            name:'dolphin',
            img: 'images/dolphinemoji.png'
        },
        {
            name:'elephant',
            img: 'images/elephantemoji.png'
        },
        {
            name:'elephant',
            img: 'images/elephantemoji.png'
        },
        {
            name:'unicorn',
            img: 'images/unicornemoji.png'
        },   
        {
            name:'unicorn',
            img: 'images/unicornemoji.png'
        },   
    ]

    cardArray.sort(() => 0.5 - Math.random()) // function to refressh Card array. Card array is shuffled and sorted
    const button = document.querySelector('.button1')
    button.addEventListener('click', cardArray.sort(() => 0.5 - Math.random()) )
    

    const grid = document.querySelector('.grid') //picked out the div class .grid from the html doc and defined  it as grid for my js
    const resultDisplay = document.querySelector ('#result')
    let cardsChosen = []  //created an empty array of cardsChosen
    let cardsChosenId = [] //created an empty array of cardsChosenId
    const cardsWon = [] //created an empty array of cardsWon

    //board creation
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {  //used the for loop to loop over card array and 
            let card = document.createElement('img') //for each card I created an image element and named it card
            card.setAttribute('src', 'images/blankK.jpg')  //set card as an attribute and link it to the relative path of the image
            card.setAttribute('data-id', i)  //also created a data id for each card, giving each card a number between 1 -11 since we have a total of 12 cardds
            card.addEventListener('click', flipCard) // added an eventListner to flip each card once its been clicked on *see func
            grid.appendChild(card) //used appendChild to put the cards into the html class grid
        }
    }
    //check for match function
    function checkForMatch () {
        let cards = document.querySelectorAll('img')//select all images using queryselectall and assign the card variable to it
        const optionOneId = cardsChosenId[0] //first chosen card is assigned the variable name optionon1id
        const optionTwoId = cardsChosenId[1] //second chosen card is assigned the variable name option2id
        /*if (optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/leafgreen.png' )
            cards[optionTwoId].setAttribute('src', 'images/leafgreen.png' )
            alert('You have clicked the same image') 
        }*/ 
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/winkingeye.png')
            cards[optionTwoId].setAttribute('src', 'images/winkingeye.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/leafgreen.png' )
            cards[optionTwoId].setAttribute('src', 'images/leafgreen.png' )
            alert('Sorry, try again')
        }
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
        }      
        cardsChosen = []
        cardsChosenId = []  
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found All of them'
        }

    function flipCard() {
        let cardId = this.getAttribute('data-id') //created a card-id variable anad gave it the attributes of the data-id
        cardsChosen.push(cardArray[cardId].name)  //using the push function we will push the cards based on the card id to the top of the array.  
        cardsChosenId.push(cardId)  //once the card is located, we get its name
        this.setAttribute('src', cardArray[cardId].img) // the "this" sets the image attribute to the card based on its id
        if (cardsChosen.length === 2) {                 //once two cards are chosen, 
            setTimeout(checkForMatch, 400)  //the checkforMatch function is invoked within 200 secounds
        }
    function reset(){
        
    }
    }
    createBoard()
})
