const startBtn = document.querySelector("button[data-start]"); 

const stopBtn = document.querySelector("button[data-stop]"); 

const body = document.querySelector("body"); 

let changeColor = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

startBtn.addEventListener("click", () => {

startBtn.setAttribute('disabled', ''); 


 changeColor = setInterval(() => {

    body.style.backgroundColor = getRandomHexColor()
}, 1000)

})

stopBtn.addEventListener("click", () => {

    clearInterval(changeColor); 
    startBtn.removeAttribute("disabled")

})
