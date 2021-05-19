class CloseButton extends CalcButton {
  #header;
  constructor(board, onclick) {
    super(board, "X", "close", onclick);
    this.#header = board;
  }
  render(container) {
    super.render(container);
    super.button.classList.add("header-calc__close-button");
  }
  close(element){
    element.remove()
  }
}
