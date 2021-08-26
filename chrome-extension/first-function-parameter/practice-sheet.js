// numbers as functions parameters
function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
console.log(add(3, 4));
console.log(add(9, 102));

// arrays as prameters
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst([0,1,2,3]));