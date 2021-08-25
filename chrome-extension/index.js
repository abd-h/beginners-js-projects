let myLeads = [];
const inputEl= document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let deleteBtn = document.querySelector("#delete-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads)
}

function render(leads) {
        let listItems = "";
        for(let i = 0; i < leads.length; i++) {
         
            listItems += `
            <li>
                <a href="${leads[i]}" target="_blank">${leads[i]}</a>
            </li>` 
        }
        ulEl.innerHTML = listItems;
    }

// delete btn
deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

inputBtn.addEventListener( "click",  function() {
    myLeads.push(inputEl.value)
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);
    console.log(localStorage.getItem("myLeads"));
    });

    // 1. wrapping the code below in a renderLeads()  function