class DotButton extends CalcButton {
  #board;
  #calContainer;
  constructor(calcContainer, board, onclick) {
    super(calcContainer, board, ".", "dot", onclick);
    this.#board = board;
    this.#calContainer = calcContainer;
  }
  render(container) {
    super.render(container);
    super.button.classList.add("button--digital");
  }
}
