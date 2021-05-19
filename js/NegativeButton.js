class NegativeButton extends CalcButton {
  #board;
  constructor(board, onclick) {
    super(board, "±", "negative", onclick);
    this.#board = board;
  }
  render(container) {
    super.render(container);
    super.button.classList.add("button--digital");
  }
}
