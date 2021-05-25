class NewCalcButton extends Button {
  #calcContainer;
  #containerId;
  constructor(calcContainer, containerId) {
    super(calcContainer, "Створити новий калькулятор", "newCalc", onclick);
    this.#calcContainer = calcContainer;
    this.#containerId = containerId;
  }
  onButtonClick(event) {
    this.#calcContainer.add(this.#containerId);
    this.#calcContainer.onHistory(this);
  }
}
