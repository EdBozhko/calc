class CloseButton extends CalcButton {
  #header;
  #calContainer;
  constructor(calcContainer, board, onclick) {
    super(calcContainer, board, "X", "close", onclick);
    this.#header = board;
    this.#calContainer = calcContainer;
  }
  render(container) {
    super.render(container);
    super.button.classList.add("header-calc__close-button");
  }
}
