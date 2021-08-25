const welcomeEl = document.querySelector("#welcome-el");
console.log(welcomeEl);
const myNameIs = "James Bond";
const emoji = "👊"
function welcome(greeting, name, emoji) {

    return welcomeEl.textContent += `${greeting } ${name} nice to see you.${emoji}`
}
console.log(welcome("Hi",myNameIs, emoji));