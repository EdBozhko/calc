class ClearButton extends CalcButton {
  #board;
  #calContainer;
  constructor(calcContainer, board, onclick) {
    super(calcContainer, board, "C", "clear", onclick);
    this.#board = board;
    this.#calContainer = calcContainer;
  }
  render(container) {
    super.render(container);
    super.button.classList.add("button--clear");
  }
}
