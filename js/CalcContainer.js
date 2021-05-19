class CalcContainer {
  #calcItems;
  #calcContainer;
  #newCalcButton;
  #newCalc;
  constructor(buttonContainer, containerId) {
    this.#calcItems = new Map();
    this.#calcContainer = this;
    this.#newCalcButton = new NewCalcButton(this, containerId);
    this.#newCalcButton.render(buttonContainer);
  }
  get calcContainer() {
    return this.#calcContainer;
  }
  add(containerId) {
    this.#newCalc = new Calc();
    this.#calcItems.set(this.#calcItems.size + 1, this.#newCalc);
    this.#newCalc.render(containerId);
    console.log(this.#calcItems);
  }
}
const a = new CalcContainer(document.querySelector("header"), "container");
