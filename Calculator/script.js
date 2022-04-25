const buttonNumber = document.querySelectorAll("[button-number]");
const buttonOperation = document.querySelectorAll("[button-operation");
const buttonEquals = document.querySelector("[button-equals]");
const buttonClear = document.querySelector("[button-clear]");
const prevNumberText = document.querySelector("[prev-number]");
const currentNumberText = document.querySelector("[current-number]");

class Calculator {
  constructor(prevNumberText, currentNumberText) {
    this.prevNumberText = prevNumberText;
    this.currentNumberText = currentNumberText;
    this.reset();
  }

  reset() {
    this.prevNumber = "";
    this.currentNumber = "";
    this.operation = undefined;
  }

  appendNumber(number) {
    if (number === "." && currentNumberText.innerText.includes(".")) {
      return;
    }
    this.currentNumber =
      currentNumberText.innerText.toString() + number.toString();
  }

  chooseOperator(operator) {
    if (this.currentNumber === "") {
      return;
    }
    if (this.prevNumber !== "") {
      this.compute();
    }
    this.operation = operator;
    this.prevNumber = this.currentNumber;
    this.currentNumber = "";
  }

  compute() {
    let result;
    const prevNum = parseFloat(this.prevNumber);
    const currentNum = parseFloat(this.currentNumber);
    if (prevNum === "" || currentNum === "") {
      return;
    }
    switch (this.operation) {
      case "+":
        result = prevNum + currentNum;
        break;
      case "-":
        result = prevNum - currentNum;
        break;
      case "%":
        result = prevNum % currentNum;
        break;
      case "*":
        result = prevNum * currentNum;
        break;
      case "÷":
        result = prevNum / currentNum;
        break;
      case "x^":
        result = Math.pow(prevNum, currentNum);
        break;
      default:
        return;
    }
    this.currentNumber = result;
    this.operation = undefined;
    this.prevNumber = "";
  }

  updateDisplay() {
    currentNumberText.innerText = this.currentNumber;
    if (this.operation != null) {
      prevNumberText.innerText = `${this.prevNumber} ${this.operation}`;
    } else {
      prevNumberText.innerText = "";
    }
  }
}

const calculator = new Calculator(prevNumberText, currentNumberText);

buttonNumber.forEach((button) => {
  button.addEventListener("click", function () {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

buttonOperation.forEach((button) => {
  button.addEventListener("click", function () {
    calculator.chooseOperator(button.innerText);
    calculator.updateDisplay();
  });
});

buttonEquals.addEventListener("click", function () {
  calculator.compute();
  calculator.updateDisplay();
});

buttonClear.addEventListener("click", function () {
  calculator.reset();
  calculator.updateDisplay();
});
