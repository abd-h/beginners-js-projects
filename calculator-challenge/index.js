// SetUp
let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sum = document.getElementById("sum-el");
function add() {
    let total = num1 + num2;
    return sum.textContent = "Sum: " + total;
}
add()
console.log(add());

function subtruct() {
    let total = num1 - num2;
    return sum.textContent = "Sum: " + total;
}
console.log(subtruct());

function divide() {
    let total = num1 / num2;
    return sum.textContent = "Sum: " + total;
}
console.log(divide());

function multiply(){
    let total = num1 * num2;
    return sum.textContent = "Sum: " + total;
}
console.log(multiply());






// Create four functions: add(), subtruct(), divide()and multiply().
// Call the correct function when the user clicks on one of the buttons
// perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

//E.g. if the user clicks on the plus button you should render "Sum: 10" (since 8 + 2 =10) inside the paragraph with id="sum-el"

