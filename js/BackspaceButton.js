class BackspaceButton extends Button {
  #board;
  constructor(board, onclick) {
    super(board, "<-", "backspace", onclick);
    this.#board = board;
  }
}
