class DotButton extends CalcButton {
  #board;
  #calc;
  constructor(calc, board, onclick, disabled) {
    super(calc, board, ".", "dot", onclick, disabled);
    this.#board = board;
    this.#calc = calc;
  }
  render(container) {
    super.render(container);
    super.button.classList.add("button--digital");
  }
}
