class CalcButton extends Button {
  #board;
  #calContainer;
  constructor(calcContainer, board, value, type, onclick) {
    super(calcContainer, value, type, onclick);
    this.#board = board;
    this.#calContainer = calcContainer;
  }
  get board() {
    return this.#board;
  }
  onButtonClick(event) {
    this.#board.currentButton = this;
    super.onButtonClick(event);
  }
}
