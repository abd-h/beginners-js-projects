let myLeads = [];
const inputEl= document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
localStorage.setItem("myLeads",  "www.awsomeleads.com");
localStorage.getItem("myLeads")
console.log(localStorage.getItem("myLeads") );
localStorage.clear("myLeads")

inputBtn.addEventListener( "click",  function() {
    myLeads.push(inputEl.value)
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    
    renderLeads();
    console.log(localStorage.getItem("myLeads"));
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











    

        