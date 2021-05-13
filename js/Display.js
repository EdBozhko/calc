class Display {
  #calc;
  #result = 0;
  constructor(calc, value = 0) {
    this.#calc = calc;
    this.#result = value;
  }

  get result() {
    return this.#result;
  }
  set result(value) {
    this.#result = value;
    console.log(this.result);
  }
}
