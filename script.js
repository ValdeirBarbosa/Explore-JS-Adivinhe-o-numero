const randNum = Math.round(Math.random()*10);
console.log(randNum)

let xAttemps = 1;


function handleTryClick(event){
    event.preventDefault()
    const inputNumber = document.querySelector("#inputNumber");
    console.log(inputNumber.value)

    if(Number(inputNumber.value) == randNum){
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")
        document.querySelector(".screen2 h2").innerText = stringfy(xAttemps)
    }
    inputNumber.value = ""
    
    xAttemps++
}

function stringfy(attemps){
    switch(attemps){
        case 1:
            return `Você consegiu em ${attemps} tentativa!`
            break
        default:
            return `Você consegiu em ${attemps} tentativas!`
    }
}

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click',handleTryClick)
btnReset.addEventListener('click',function(){
    document.querySelector(".screen1").classList.toggle("hide")
    document.querySelector(".screen2").classList.toggle("hide")
    randNum = Math.round(Math.random()*10);
    xAttemps = 1

})
