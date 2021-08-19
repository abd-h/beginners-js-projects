// Creating myLeads array and inputEl
let myLeads = ["www.awsomeleads.com", "www.epicleed.com", "www.greatlead.com", 1];
const inputEl= document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
// inputButton.addEventListener("click", function(){
//     console.log("Button clicked");
// })
 
// first addEventListener
let box = document.getElementById("box");
box.addEventListener("click", function() {
    console.log("I want to open the box!");
})

inputBtn.addEventListener("click",  function() {
    myLeads.push(inputEl.value)
    console.log(myLeads);
    
    
    })
    
for (let i = 0; i <myLeads.length; i++) {
        ulEl.innerHTML +=  "<li>" +myLeads[i] + "</li>";
        }

        // Buy button
        const container = document.getElementById("container")
        container.innerHTML += `<button class="button"  onclick='buy()'>Buy!</button>`;
function buy(){
    container.innerHTML += `<p class="le">Thank you for buying</p>`
}