class OperationButton extends CalcButton {
  #board;
  #calc;
  constructor(calc, board, value, onclick, disabled) {
    super(calc, board, value, "operation", onclick, disabled);
    this.#calc = calc;
  }
  render(container) {
    super.render(container);
    super.button.classList.add("button--operation");
  }
}
