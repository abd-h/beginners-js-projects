const imgs = [
    
   `<img class= team-img src=./images/backyard-bird.jpeg alt=Employee of the company>
   <img class= team-img src=./images/images.jpeg alt=Employee of the company>
   <img class= team-img src=./images/song-bird.jpeg alt=Employee of the company>`
    
]
console.log(imgs[0]);
let h2 = document.querySelector(".h2");
h2.innerHTML = `The Brooklyn Agency`

const container = document.querySelector(".container");
console.log(container);
function renderImages(){
    let imgDom = ""
    for (let i = 0; i < imgs.length; i++) {
        imgDom += imgs[i];
    }
     container.innerHTML += imgDom;
}
renderImages();
















`'<img src="./images/backyard-bird.jpeg" alt="">',
    '<img src="./images/images.jpeg" alt="">',
    '<img src="./images/song-bird.jpeg" alt="">'`
