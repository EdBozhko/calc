class Button {
  #board;
  #value;
  #type;
  #onclick;
  constructor(board, value, type, onclick) {
    this.#board = board;
    this.#value = value;
    this.#type = type;
    this.#onclick = onclick;
  }

  onButtonClick(event) {
    this.#board.currentButton = this;
    this.#onclick(this);
  }
  get value() {
    return this.#value;
  }
  get type() {
    return this.#type;
  }
}
