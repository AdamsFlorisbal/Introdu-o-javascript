correntNumberW = document.getElementById("currentNumber");

currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  correntNumberW.innerHTML = currentNumber;
  if(currentNumber > 0){
    correntNumberW.style.color = "black"
}
}

function decrement() {
  currentNumber = currentNumber - 1;
  correntNumberW.innerHTML = currentNumber;
  if(currentNumber < 0){
      correntNumberW.style.color = "white"
  }
}
