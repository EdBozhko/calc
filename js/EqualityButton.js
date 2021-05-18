class EqualityButton extends Button {
  #board;
  constructor(board, onclick) {
    super(board, "=", "equality", onclick);
    this.#board = board;
  }
  render(containerId) {
    super.render(containerId)
    super.button.classList.add("class", "button--equality")
  }
}
