// Welcome Message
let welcomeEl = document.getElementById("welcome-el");
let name2 = "Joe";
let greeting2 = "Welcome Back";
welcomeEl.textContent = `${greeting2} ${name2}`;
welcomeEl.textContent += "  👋🏽"
console.log(welcomeEl);
//..................................

// Icrementing

let count = 0;
let countEl = document.getElementById("count-el");
console.log(countEl);
function increment(){
    count++;
    countEl.textContent = count;
    return count
}
increment();
console.log(count);
//......................................................

//Save feature

let saveEl = document.getElementById("save-el");
function save(){
    let saveCount = count + "-";
    saveEl.textContent += saveCount;
   countEl.textContent = 0; 
   count = 0;
}
save();
console.log(count);
/*
    Javascript  Setup:

    ** Welcome Messege setup
    1. create a variable welcome-el and call id welcome-El
    2. create variable name and set to name1, stGreating and set to "Welcome back"
    3. set welcome-El innerText or textContant = stGreeting and concat name1 and then 
         add emoji

    ** Increment count**
    5. create count variable and set to 0;
    6. create countEl and set to document to count-El id;
    7. create increment function that increments count and set to count-El.innert,
        then return count. Evoke increment function;

    ** Save Fearture **
    8. create saveEl veriable and set to documet with  save-el id    
    9. create save count function
    10. create saveCount veriable and set to count 
    11. saveEl.textContent  and increment savedCount.
    12. finally set the count to zero after save and then evoke save function.

*/