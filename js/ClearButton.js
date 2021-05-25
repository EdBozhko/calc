class ClearButton extends CalcButton {
  #board;
  #calc;
  constructor(calc, board, onclick) {
    super(calc, board, "C", "clear", onclick);
    this.#board = board;
    this.#calc = calc;
  }
  render(container) {
    super.render(container);
    super.button.classList.add("button--clear");
  }
}
