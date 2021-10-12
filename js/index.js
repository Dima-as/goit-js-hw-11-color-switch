
const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  bodyEl: document.querySelector('body')
};
const { startBtn, stopBtn, bodyEl } = refs;

startBtn.addEventListener('click', themeSwitcherClick);
stopBtn.addEventListener('click' , stopThemeSwitcherClick);

let intervalId = null
let isActif = false

function interval(){
   if (isActif) {
       return
   }
   isActif= true
   intervalId = setInterval(() => {
        const random = Math.floor(Math.random() * colors.length-1)
        bodyEl.style.backgroundColor  = colors[random]
        console.log(bodyEl);
    }, 1000);
}


function themeSwitcherClick(){
    interval()
    return

};

 
function stopThemeSwitcherClick(){
    clearInterval(intervalId)
    isActif = false
}

const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];




