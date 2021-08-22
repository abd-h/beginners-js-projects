// Creating myLeads array and inputEl
let myLeads = [];
const inputEl= document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener( "click",  function() {
    myLeads.push(inputEl.value)
    inputEl.value = "";
    renderLeads();
 
    });

    // 1. wrapping the code below in a renderLeads()  function
    
    function renderLeads() {
        let listItems = "";
        for(let i = 0; i < myLeads.length; i++) {
         
            listItems += `
            <li>
                <a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a>
            </li>` 
        }
        ulEl.innerHTML = listItems;
    }











    

        // Buy button
        const container = document.getElementById("container")
        container.innerHTML += `<button class="button"  onclick='buy()'>Buy!</button>`;
function buy(){
    container.innerHTML += `<p class="le">Thank you for buying</p>`
}