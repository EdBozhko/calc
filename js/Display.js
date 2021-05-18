class Display {
  #calc;
  #result = 0;
  #memo;
  #display;
  #displayMemo;
  #displayResult;
  #container;
  constructor(calc, value, memoValue = "") {
    this.#calc = calc;
    this.#result = value;
    this.#memo = memoValue;
  }

  get result() {
    return this.#result;
  }
  set result(value) {
    this.#result = value;
    console.log(`display result ${this.#result}`);
  }

  get memoValue() {
    return this.#memo;
  }
  set memoValue(value) {
    this.#memo = value;
    console.log(`display memo ${this.#memo}`);
  }
  get displayResult() {
    return this.#displayResult;
  }
  set displayResult(value) {
    this.#displayResult = value;
  }
  get displayMemo() {
    return this.#displayMemo;
  }
  set displayMemo(value) {
    this.#displayMemo = value;
  }
  render(containerId) {
    this.#container = containerId;
    this.#display = document.createElement("div");
    this.#display.setAttribute("class", "display");
    this.#displayMemo = document.createElement("span");
    this.#displayMemo.setAttribute("class", "display__display-memo");
    this.#displayMemo.innerText = this.#memo;
    this.#displayResult = document.createElement("span");
    this.#displayResult.setAttribute("class", "display__result");
    this.#displayResult.innerText = this.#memo;
    this.#display.appendChild(this.#displayMemo);
    this.#display.appendChild(this.#displayResult);
    this.#container.appendChild(this.#display);
  }
}
