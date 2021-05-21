class HideButton extends CalcButton {
  #header;
  constructor(board, onclick) {
    super(board, "—", "hide", onclick);
    this.#header = board;
  }
  render(container) {
    super.render(container);
    super.button.classList.add("header-calc__hide-button");
  }

}
