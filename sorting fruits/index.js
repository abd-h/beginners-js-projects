 let fruits = ["🍎", "🍊", "🍎", "🍎", "🍊"];
 let appleShelf = document.getElementById("apple-shelf");
 let orangeShelf = document.getElementById("orange-shelf");
 function fruitShelf(){
     for(let i = 0; i < fruits.length; i++){
         if(fruits[i] === "🍎"){
             appleShelf.textContent += `  ${fruits[i]}   `;
         }
         else if(fruits[i] === "🍊"){
            orangeShelf.textContent += ` ${fruits[i]} `;
         }
     }
 }
 fruitShelf();