class OperationButton extends CalcButton {
  #board;
  #calc;
  constructor(calc, board, value, onclick) {
    super(calc, board, value, "operation", onclick);
    this.#calc = calc;
  }
  render(container) {
    super.render(container);
    super.button.classList.add("button--operation");
  }
}
