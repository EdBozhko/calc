class CalcButton extends Button {
  #board;
  #calc;
  constructor(calc, board, value, type, onclick, disabled) {
    super(calc, value, type, onclick, disabled);
    this.#board = board;
    this.#calc = calc;
  }
  get board() {
    return this.#board;
  }
  onButtonClick(event) {
    this.#board.currentButton = this;
    super.onButtonClick(event);
    this.#calc.onHistory(this);
  }
}
