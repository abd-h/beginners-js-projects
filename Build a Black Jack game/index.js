    //Building blackjack Game
   
   let cards = []
    let total = 0;
    let hasBlackJack = false;
    //added isAlive
    let isAlive = false;
    //Adding the message variable
    let message = "";
    // Created message Variable for displaying message
    let messageEl = document.getElementById("message-el");
    // Created sumEl for displaying sum by using querySelector
    //let sumEl = document.querySelector("#sum-el")
    // Created sumEl for displaying sum
    let sumEl = document.getElementById("sum-el")
    //Created cardsEl variable for displaying cards tally
    let cardsEl = document.getElementById("cards-el");

    // let playerName = "Norman";
    // let playerChips = 145;

    let player = {
        player: "Norman",
        chips: 145
    };

    let playerEl = document.getElementById("player-el");
    playerEl.textContent = `${player.name} $${player.chips}`

 
    console.log(cards);
    // Creating startGame function for the Start Game button
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    total = firstCard + secondCard;

    renderGame();
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() *13) + 1;
    if(randomNumber > 10) {
        return 10;
    }
    else if (randomNumber === 1){
        return 11;
    }
    else {
        return randomNumber;
    }
}


// Renamed  startGame to renderGame
  function renderGame() {
      // render out firstCard and secondCard  
    //    cardsEl.textContent = `Cards: ${cards[0]} ${cards[1 ]}`;
       // Creating  a for loop that renders out all
       //cards instead of  just two;
       cardsEl.textContent = "Cards: ";
       for (let i = 0; i < cards.length; i++){
            
            cardsEl.textContent += cards[i] + " ";
       }
      sumEl.textContent = `Sum: ${total}`
     if(total <=20) {
         message = `do you want draw new card from the deck `;
     }
     else if (total === 21) {
         message =`congratulations`;
         hasBlackJack = true;
     }
     else{
         message = `Game is Over`;
         isAlive = false;
     }

    messageEl.textContent = message;
  }

  //New card function
  function newCard(){
      console.log("Drawing a new card from the deck");
      if (isAlive === true && hasBlackJack === false){
             //add to the sum when newCard is clicked
            let thirdCard = getRandomCard();
            total += thirdCard;
            cards.push(thirdCard);
             renderGame();
           
      }
     
  }



/* (total <= 20)? message = `Want to play around ?`
    :(total === 21)? (message += `Congratulations`, hasBlackJack  = true)
    : (message += `Game is Over`, isAlive = false);*/