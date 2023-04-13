//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keypress", enterTest)

//funções
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")
    document.querySelector(
      ".screen2 h2"
    ).innerText = `acertou em ${xAttempts} tentativas`
    toggleScreen()
    screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick(event) {
  event.preventDefault()
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

// Eventos
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
function enterTest() {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
  }
}
