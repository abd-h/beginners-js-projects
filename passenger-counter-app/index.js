
// document.getElementById("coun-El").innerText = 5;

//Welcome message
let welcomeEl = document.getElementById("welcome-El"),
    name1 = " Alex",
    stGreeting = " Welcome back ",
    msgBoard;

welcomeEl.innerText = stGreeting.concat(name1);
welcomeEl.innerText +=  "👋🏽"

//Increment count

let count = 0;
let countEl = document.getElementById("count-el");
function increment(){
    count++;
    countEl.innerText = count;
    return count;
}
increment();

//Creating Save feature
let saveEl = document.getElementById("save-el");
// save count;
function save(){
    let savedCount = count + " - "; 
    saveEl.textContent += savedCount;
    countEl.innerText = 0;
    count = 0;
}
 save()




    

    

    































