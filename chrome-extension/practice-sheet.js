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

    // Buy button
        const container = document.getElementById("container")
        container.innerHTML += `<button class="button"  onclick='buy()'>Buy!</button>`;
function buy(){
    container.innerHTML += `<p class="le">Thank you for buying</p>`
}

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