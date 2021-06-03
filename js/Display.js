class Display {
  #calc;
  #result;
  #memo;
  #container;
  #displayContainer;
  #display;
  #displayMemo;
  #displayResult;
  constructor(calc, value, memoValue = '') {
    this.#calc = calc;
    this.#result = value;
    this.#memo = memoValue;
  }

  get result() {
    return this.#result;
  }

  set result(value) {
    this.#result = value;
  }

  get memoValue() {
    return this.#memo;
  }

  set memoValue(value) {
    this.#memo = value;
  }

  get display() {
    return this.#display;
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

  render(container) {
    this.#container = container;
    this.#display = document.createElement('div');
    this.#display.setAttribute('class', 'display');
    this.#displayContainer = document.createElement('div');
    this.#displayContainer.setAttribute('class', 'display-container');
    this.#displayMemo = document.createElement('span');
    this.#displayMemo.setAttribute('class', 'display__display-memo');
    this.#displayMemo.innerText = this.#memo;
    this.#displayResult = document.createElement('span');
    this.#displayResult.setAttribute('class', 'display__result');
    this.#displayResult.innerText = this.#memo;
    this.#displayContainer.appendChild(this.#displayMemo);
    this.#displayContainer.appendChild(this.#displayResult);
    this.#display.appendChild(this.#displayContainer);
    this.#container.appendChild(this.#display);
  }
}
