class OperationButton extends Button {
  #board;
  constructor(board, value, onclick) {
    super(board, value, "operation", onclick);
    this.#board = board;
  }
}
