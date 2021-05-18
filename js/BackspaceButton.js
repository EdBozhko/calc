class BackspaceButton extends Button {
  #board;
  constructor(board, onclick) {
    super(board, "⟸", "backspace", onclick);
    this.#board = board;
  }
  render(containerId) {
    super.render(containerId)
    super.button.classList.add("class", "button--backspace")
  }
}
