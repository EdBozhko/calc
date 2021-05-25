class OperationButton extends CalcButton {
  #board;
  #calContainer;
  constructor(calcContainer, board, value, onclick) {
    super(calcContainer, board, value, "operation", onclick);
    this.#calContainer = calcContainer;
  }
  render(container) {
    super.render(container);
    super.button.classList.add("button--operation");
  }
}
