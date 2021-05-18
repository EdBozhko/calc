class BackspaceButton extends Button {
  #board;
  constructor(board, onclick) {
    super(board, "⟸", "backspace", onclick);
    this.#board = board;
  }
  render(container) {
    super.render(container);
    super.button.classList.add("class", "button--backspace");
  }
}
