class OperationButton extends CalcButton {
  #board;
  constructor(board, value, onclick) {
    super(board, value, "operation", onclick);
    this.#board = board;
  }
  render(container) {
    super.render(container);
    super.button.classList.add("button--operation");
  }
}
