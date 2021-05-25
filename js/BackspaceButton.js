class BackspaceButton extends CalcButton {
  #board;
  #calc;
  constructor(calc, board, onclick) {
    super(calc, board, "⟸", "backspace", onclick);
    this.#board = board;
    this.#calc = calc;
  }
  render(container) {
    super.render(container);
    super.button.classList.add("button--backspace");
  }
}
