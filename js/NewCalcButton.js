class NewCalcButton extends Button {
  #calcContainer;
  #containerId;
  constructor(calcContainer, containerId, disabled) {
    super(calcContainer, "Створити новий калькулятор", "newCalc", onclick, disabled);
    this.#calcContainer = calcContainer;
    this.#containerId = containerId;
  }
  onButtonClick(event) {
    this.#calcContainer.add(this.#containerId);
  }
}
