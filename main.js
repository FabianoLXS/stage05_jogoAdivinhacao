//variaveis
const randomNumber = Math.round(Math.random() * 10)
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let xAttempts = 1


// Eventos
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")
    document.querySelector(
      ".screen2 h2"
    ).innerText = `acertou em ${xAttempts} tentativas`
  }
  inputNumber.value = ""
  xAttempts++
}
//Função callBack
function handleResetClick(event) {
  event.preventDefault()

    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")
    xAttempts = 1
  }



btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)