class Button {
  #board;
  #value;
  #type;
  #onclick;
  #container;
  #button;
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
  get button () {
    return this.#button
  }
  render(containerId) {
    this.#container = containerId;
    this.#button = document.createElement("button");
    this.#button.setAttribute("class", "button")
    this.#button.innerText = this.#value;
    this.#button.addEventListener("click", this.onButtonClick.bind(this));
    this.#container.appendChild(this.#button);
  }
}
