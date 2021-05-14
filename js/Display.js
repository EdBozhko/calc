class Display {
  #calc;
  #result = 0;
  #memo;
  constructor(calc, value = 0, memoValue = "") {
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
}
