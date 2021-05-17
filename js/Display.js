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
    const br = document.createElement("br");

    this.#container = containerId;
    this.#display = document.createElement("div");
    this.#displayMemo = document.createElement("span");
    this.#displayMemo.innerText = this.#memo;
    this.#displayResult = document.createElement("span");
    this.#displayResult.innerText = this.#memo;
    this.#display.appendChild(this.#displayMemo);
    this.#display.appendChild(br);
    this.#display.appendChild(this.#displayResult);
    this.#container.appendChild(this.#display);
  }
}
