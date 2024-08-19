const calculator = document.querySelector(".calculator");
const formulaScreen = document.querySelector(".formula-screen");
const outputScreen = document.querySelector(".output-screen");

let previousOperand = "";
let currentOperand = "";
let mathOperator = undefined;

calculator.addEventListener("click", (e) => {
    if (e.target.matches("button.button")) {
      let clickedButton = e.target.value;
  
      switch (clickedButton) {
        case "AC":
          clear();
          break;
        case "%":
        case "/":
        case "*":
        case "-":
        case "+":
          appendMathOperator(clickedButton);
          updateDisplay();
          break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
          appendNumber(clickedButton);
          updateDisplay();
          break;
        case "=":
          calculation();
          updateDisplay();
          break;
        default:
          console.log("Something went wrong!");
      }
    }
  });

  function appendNumber(number) {
    if (number === "." && currentOperand.includes(".")) return;
    currentOperand = currentOperand.toString() + number.toString();
  }

  function updateDisplay() {
    outputScreen.value = currentOperand;
    if (mathOperator) {
      formulaScreen.value = `${parseFloat(previousOperand)} ${mathOperator}`;
    } else {
      formulaScreen.value = "";
    }
  }

  function clear() {
    formulaScreen.value = "";
    outputScreen.value = 0;
    mathOperator = undefined;
    previousOperand = "";
    currentOperand = "";
  }

  

  