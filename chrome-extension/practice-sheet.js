// inputButton.addEventListener("click", function(){
//     console.log("Button clicked");
// })


// console.log(myLeads);
    
    // for (let i = 0; i <myLeads.length; i++) {
    //      // ulEl.innerHTML +=  "<li>" +myLeads[i] + "</li>";
    //    const li = document.createElement("li");
    //    li.textContent = myLeads[i];
    //    ulEl.append(li);
    //     }

    // Template string
    const recepient = "James",
    sender = "Robert Dinero"
    const email = "Hi " + recepient + " how is it going? Cheers Per ";

    console.log(email);

    let nEmail = `Hi ${recepient} 
                        How is it going? cheers ${sender}`;
    console.log(nEmail);

//     // Buy button
//         const container = document.getElementById("container")
//         container.innerHTML += `<button class="button"  onclick='buy()'>Buy!</button>`;
// function buy(){
//     container.innerHTML += `<p class="le">Thank you for buying</p>`
// }

// Your first local storage
let myLeads2 = `["www.awsomeleads.com"]`;
localStorage.setItem("myLeads",  "www.awsomeleads.com");
localStorage.getItem("myLeads")
console.log(localStorage.getItem("myLeads") );
localStorage.clear("myLeads")


//storing arrays in localStorage
myLeads2 = JSON.parse(myLeads2);
myLeads2.push(" www.apple.com");
console.log(myLeads2);

// arrays stringfied;
myLeads2 = myLeads2.toString(myLeads2);
console.log(typeof myLeads2);

//...........................................

// truthy and falsy values

const credits = 0;

if ("s") {
    console.log("lets play 🤡");
}
else {
    console.log("Sorry you have no credit 😩");
}
//..........................................................

//guess the expression - truthy or falsy

console.log( Boolean("") ) // falsy;
console.log( Boolean("0") ) // truthy;
console.log( Boolean(100) ) // truthy ;
console.log( Boolean(null) ) //falsy ;
console.log( Boolean([0]) ) // truth ;
console.log( Boolean(-0) ) // falsy;

// tabBtn.addEventListener("click", () => {
//     localStorage.setItem("tabs[0].url", JSON.stringify(tabs[0].url));
//     myLeads.push(ulEl.value);
//     saveBtn();
//     console.log(tabs);
// })


function saveBtn(){
    let listItems = "";
    listItems += 
            `
            <li>
            <a href = ${tabs[0].url} target=_blank> ${tabs[0].url}</a>
            </li>
            `
            ulEl.innerHTML = listItems
}

// let and const
// setting the stage
const player1  = "Jason",
    opponent = "Nick",
    game = "Amzonfighter"

    // Playing the game
let  points = 100,
          hasWon = 0    

// Anounce the winner
if(hasWon){
    console.log(`${player1} got  ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent} ${player1} lost the game!`);
}
// log out items of array;
let myCourses = ["Learn CSS Animation", "UI Design fundamentals", "Intro to clean code"]
function singleParamms(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
singleParamms(myCourses)


// addEventListner and object in array;
let data = [
    {
        play: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 42
    }
]
const btnEl = document.getElementById("btn-el");
const  p = document.getElementById("p")
console.log(btnEl);

btnEl.addEventListener("click", () => {
   console.log(data[0].score);
})
 p.innerHTML += `${data[0].play} `
 p.innerHTML += data[0]["score"]

 // Generate a sentence
 function generateSentence(desc, arr) {
     let s = `The ${arr.length} ${desc} are `
     for (let i = 0; i < arr.length; i++) {
        s += `${arr[i]}, `
     }
     return s.slice(0, s.length-2);
 }
 console.log(generateSentence("largest countries", ["China", "India", "USA"]));