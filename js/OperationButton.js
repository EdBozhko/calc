class OperationButton extends Button {
  #board;
  constructor(board, value, onclick) {
    super(board, value, "operation", onclick);
    this.#board = board;
  }
  render(containerId) {
    super.render(containerId)
    super.button.classList.add("class", "button--operation")
  }
}
