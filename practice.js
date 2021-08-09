 // Declaring morethan one variable at once
 let 
     lap1 = 34,
     lap2 = 33, 
     lap3 = 36
 
function sum() {
    return (lap1 + lap2) + lap3;
}
console.log(sum());

let lapsCompleted = 0;
function sumOfLaps(){
    lapsCompleted++;
  
}
sumOfLaps();
sumOfLaps();
sumOfLaps();
sumOfLaps();
console.log(lapsCompleted);
console.log(lapsCompleted);
console.log(lapsCompleted);

// variables practice concatination
let firstName = `James`,
    lastName =`Bond`,
    fullName = `${firstName} ${lastName}`;
console.log(fullName);

let fName = "Linda",
    nGreeting ="Hi there";
function newGreeting() {
    return `${nGreeting}, ${fName}!`;
}    
console.log(newGreeting());


//incrementing and decrementing

let myPoints = 3;
//create a function, add3points() and removePoint(), and have them 
//add/remove points to/from the my point veriable.

function add3points() {
    myPoints += 3;
}
function removePoint(){
    myPoints--;
}

add3points()
add3points()
add3points()
removePoint();
removePoint();
console.log(myPoints);

//Strings and Numbers
// Try to predict what each of the line will log out
console.log("2" + 2); // "22"
console.log(11 + 7); // 18
console.log(6 + "5");// "65"
console.log("My points: " + 5 + 9); // "My points: 59"
console.log(2 + 2); // 4
console.log("11" + "14"); // "1114"



// // save count;
// function save(){
//     console.log(count);
// }
// save();

//Practicing strings;
let userName ="Thomas"

let msg = "You have three new notification";
console.log(userName.concat(" ",msg));

let msgToUser = msg.concat(", ", userName, "!");
console.log(msgToUser);

let myName = "Alex", 
    greating = "Hi my name is ",
    myGreeting = greating.concat(myName)
console.log(myGreeting);

// string coercion
let points = 4,
    bonusPoint = "10",
    totalPoints = points + bonusPoint
console.log(totalPoints);

//if else statement practice
// night club enteries

    let age = 22;
    age = 35;
    (age <= 21)
                    ? console.log(`Sorry you can not enter the Club`)
                    : console.log(`Welcome`);
    console.log(age);     

    // Check if the person is elegible for birthday card from the King! (100)
    let grandAge = 101;
    (grandAge < 100)
                      ? console.log(`Not Elegible`)
                      : (grandAge === 100)
                      ? console.log(`Here's your birthday card from the King!`)
                      : console.log(`Not elegible you've already gotten your Card`);
    console.log(grandAge);     

    //comparison test
    console.log(4 === 3); // false
    console.log(5 > 2); // true
    console.log(12 > 12); // false
    console.log(3 < 0); // false
    console.log(3 >= 3); // true
    console.log(11 <= 11); // true
    console.log(3 <= 2);// false

    // Intro to arrays 
     let fearturdPost = [
         "Check my Netflix clone",
         "Here's the code for my projects",
         "I've just relaunched my projects"
     ];

     // chellenge
     // Create an array that lists experiece,   education and skills.
     // The items of array should be strings

     let cv = ["Oldfields School", "Customer Relations Manager", "AAT license" ];
     console.log(cv[1]);
     console.log(cv[2]);
     console.log(cv[0 ]);


     // Arrays with multiple data types
    let messages = [
        "Hey, how's it going",
        "I'm great, thanks! How about you?",
        "all good. been working on my portofolio lately."
     ];
     let newMessage = "Same Here!";
     messages .push(newMessage);
     console.log(messages);
     messages.pop();
     console.log(messages);

//...........................................     
    
// Count to ten!

// We need to specify...

// Where do we need to START counting?
//Where is the FINISH line?
//What is the STEP SIZE we should take?

//       START             FINISH        STEP SIZE
for ( let count = 1;    count < 11;    count++) {
    console.log(count); 
}

//       START             FINISH        STEP SIZE
for ( let count = 10;    count <= 20;    count++) {
    console.log(count); 
}

//Count from 0 to 5;
for (let i = 0; i <=5; i++){
    console.log(i);
}

// Count from 10 to 100 in steps of 10
for (let i =10; i <= 100; i += 10){
    console.log(i);
}

// Writing array based for loops
let firstMessage = [
        "Hey, how's it going",
        "I'm great, thanks! How about you?",
        "all good. been working on my portofolio lately.",
        "Same here",
        "gr"
     ];

     for (let i = 0; i < firstMessage.length; i++){
         console.log(firstMessage[i]);
     }

     let cardsArray = [7, 3, 9];
     for (let i = 0; i < cards.length; i++ ){
         console.log(cardsArray[i]);
     }

     /*
     Rendering the sentence in the greetingEl 
     paragraph using a for loopand.textContent */

     let sentence = ["Hello", "my name", "is", "Thomas Tuchal"];

     let greetingEl = document.getElementById("greeting-el");
     for (let i = 0; i < sentence.length; i++){
        greetingEl.textContent += sentence[i]+ " " ;
     }
