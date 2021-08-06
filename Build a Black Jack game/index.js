  
    //Building blackjack Game
   let firstCard = 10;
   let secondCard = 11;
    let total = firstCard + secondCard;

    // Add the hasBlackJack variable
    let hasBlackJack = false;

    //added isAlive
    let isAlive = true;


    (total < 21)
                     ? console.log(`Do you want to draw new card 🤔`) 
                     :(total === 21)
                     ? console.log("Congratulations 😎")
                     ? hasBlackJack  = true
                     : console.log("Game is Over")
                     :isAlive = false;

    console.log(total);
    console.log(hasBlackJack);
    console.log(isAlive);



