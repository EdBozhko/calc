class EqualityButton extends Button {
  #board;
  constructor(board, onclick) {
    super(board, "=", "equality", onclick);
    this.#board = board;
  }
  render(container) {
    super.render(container);
    super.button.classList.add("class", "button--equality");
  }
}
