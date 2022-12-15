const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randNum = Math.round(Math.random() * 10);
let xAttemps = 1;

let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");

//Eventos

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

document.addEventListener('keydown',handleKeyPress);

//Callbacks

function handleKeyPress(event){
    if(event.key='Enter' && screen1.classList.contains("hide")){
        handleResetClick()
    }

}
function handleTryClick(event) {
  event.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");
  
  console.log(inputNumber.value);
  if(inputNumber.value ==""){
    alert("Campo vazio, nao valeu!")
  }else if(Number(inputNumber.value) <=10 && Number(inputNumber.value) >=0 ){
    if (Number(inputNumber.value) == randNum) {
        toggleScreen();
        document.querySelector(".screen2 h2").innerText = stringfy(xAttemps);
      }
      xAttemps++;
  }else{
    alert("O numero deve ser entre 0 e 10!")
  }
  inputNumber.value = "";
}

function stringfy(attemps) {
  switch (attemps) {
    case 1:
      return `Você consegiu em ${attemps} tentativa!`;
      break;
    default:
      return `Você consegiu em ${attemps} tentativas!`;
  }
}

function handleResetClick() {
  toggleScreen();
  xAttemps = 1;
}

function toggleScreen() {
  screen2.classList.toggle("hide");
  screen1.classList.toggle("hide");
  randNum = Math.round(Math.random() * 10);
}
