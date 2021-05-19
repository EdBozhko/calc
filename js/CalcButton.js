class CalcButton extends Button {
  #board;
  constructor(board, value, type, onclick) {
    super(value, type, onclick);
    this.#board = board;
  }

  onButtonClick(event) {
    this.#board.currentButton = this;
    super.onButtonClick(event);
  }
}
