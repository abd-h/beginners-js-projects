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