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
    this.#onclick(this);
  }
  get value() {
    return this.#value;
  }
}
