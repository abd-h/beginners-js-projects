/*  Objects - store dtaa in-depth - composite / complex 
    data type / key-value pairs*/ 

 let course = {
     title: "Learn CSS Grid for free",
     lessons: 16,
     length: "63",
     creator: "Norman Harrison",
     level: 2,
     isFree: true,
     tags: ["html", "css"]
 };
 console.log(course.tags );

 //create first object
 let airBnbCastle = {
     title: "My house is my castle",
     pricePerRooms: 100,
    swimmingPool: "Yes",
     rooms: [
         "Luxeries",
        25
     ], 
     isSuperHost: true,
 };
 console.log(airBnbCastle.swimmingPool, airBnbCastle["title"]);
 //.....................................................

 //Object and functions
 let person = {
     name: "James Rowland",
     age: 39,
     country: "England",
     
 };
 function logData() {
     {
         return person.name + " is " + person.age +" and lives in "+ person.country
        }
 }
 console.log(logData());

// if else
let age1 = 75
    if(age1 <= 5){
        age1 = "Free";
    }
    else if (age1 >= 6 && age1 <=17) {
         age1 = "Child Discount";
    } else if (age1 >= 18 && age1 <= 26) {
          age1 = "Sudent Discount";
    }
    else if (age1 >= 27 && age1 <= 66) {
         age1 ="Full Price";
    }
    else {
          age1 = "Senior Citizen";
    }
console.log(age1);

// loops and arrays
let largeContries = ["China", "India", "USA", "Indonesia", "Pakistan"];
let p = "The 5 largest countries in the world";
console.log(p);
for(let i = 0; i < largeContries.length; i++){
    console.log(" " + "  - "  +  largeContries[i]);
}

//push, pop, shift, unshift

let largerstCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monoco"]

largerstCountries.pop();
largerstCountries.shift();
largerstCountries.unshift("China");
largerstCountries.push("Pakistan");
console.log(largerstCountries);

//  logical operator
let dayOfTheMonth = 13;
let day = "Thursday";
if (day === "Thursday" && dayOfTheMonth === 13){
    console.log("😱"); 
}

// Rock paper scissors
let hands = ["rock", "paper", "scissor"];
function getHand(){
    let randomIndex = Math.floor(Math.random() * 3);
    return hands[randomIndex]
}
console.log(getHand());

