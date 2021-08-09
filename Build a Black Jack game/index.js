  
    //Building blackjack Game
   let firstCard = 2;
   let secondCard = 3;
   let cards = [firstCard, secondCard]// Creating cards array - ordered list of items.
    let total = firstCard + secondCard;

    // Add the hasBlackJack variable
    let hasBlackJack = false;

    //added isAlive
    let isAlive = true;

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

    


    // (total <= 20)? message = `Want to play a round ?`
    // :(total === 21)? (message += `Congratulations 😎`,hasBlackJack  = true)
    // : (message += `Game is Over`, isAlive = false);
    console.log(total);
    console.log(hasBlackJack);
    console.log(isAlive);
    console.log(message);

    // Creating startGame function for the Start Game button
function startGame(){
    renderGame();
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
         isAlive = false
     }

    messageEl.textContent = message;
  }

  //New card function
  function newCard(){
      console.log("Drawing a new card from the deck");
      //add to the sum when newCard is clicked
      let thirdCard = 4;
      total += thirdCard;
      renderGame();
      cards.push(thirdCard);
      console.log(cards);
  }



/* (total <= 20)? message = `Want to play around ?`
    :(total === 21)? (message += `Congratulations`, hasBlackJack  = true)
    : (message += `Game is Over`, isAlive = false);*/