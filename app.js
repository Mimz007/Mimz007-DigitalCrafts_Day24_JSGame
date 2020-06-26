document.addEventListener('DomContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name:'dog',
            img: 'DOMproject/images/dogemogi.png'
        },
        {
            name:'dog',
            img: 'DOMproject/images/dogemogi.png'
        },
        {
            name:'panda',
            img: 'DOMproject/images/pandaemoji.png'
        },
        {
            name:'panda',
            img: 'DOMproject/images/pandaemoji.png'
        },
        {
            name:'cat',
            img: 'DOMproject/images/catemoji.png'
        },
        {
            name:'cat',
            img: 'DOMproject/images/catemoji.png'
        },
        {
            name:'dolphin',
            img: 'DOMproject/images/dolphinemoji.png'
        },
        {
            name:'dolphin',
            img: 'DOMproject/images/dolphinemoji.png'
        },
        {
            name:'elephant',
            img: 'DOMproject/images/elephantemoji.png'
        },
        {
            name:'elephant',
            img: 'DOMproject/images/elephantemoji.png'
        },
        {
            name:'unicorn',
            img: 'DOMproject/images/unicornemoji.png'
        },   
        {
            name:'unicorn',
            img: 'DOMproject/images/unicornemoji.png'
        },   
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector ('#result')
    let cardsChosen = []
    let cardsChosenId = []
    const cardsWon = []

    //board creation
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {  //use for loop to loop over card array
            let card = document.createElement('img')
            card.setAttribute('src', 'DOMproject/images/winkingeye.png')  //set card as an attribute and link it to the relative path of the image
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    //check for matches
    function checkForMatch () {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'DOMproject/images/leafgreen.png' )
            cards[optionTwoId].setAttribute('src', 'DOMproject/images/leafgreen.png' )
            alert('You have clicked the same image') 
        } 
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'DOMproject/images/winkingeye.png')
            cards[optionTwoId].setAttribute('src', 'DOMproject/images/winkingeye.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } 
        else
              cards[optionOneId].setAttribute('src', 'DOMproject/images/winkingeye.png')
              cards[optionTwoId].setAttribute('src', 'DOMproject/images/winkingeye.png')
              alert('Sorry, try again')
        }      
         
        cardsChosen = []
        cardsChosenId = []  
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found All of them'
        }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500) 
        }
    }

    createBoard()
})

