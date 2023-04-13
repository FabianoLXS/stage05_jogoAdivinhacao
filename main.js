//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)
let xAttempts = 1

//eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keypress", enterTest) //verificar esta linha

//funções
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.toggle()
    screen2.classList.toggle()
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

//esta com problema essa função para apertar o enter
function enterTest(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    toggleScreen()
  }
}
