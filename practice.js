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