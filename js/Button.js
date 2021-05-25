class Button {
  #value;
  #type;
  #onclick;
  #container;
  #button;
  #calc;
  constructor(calc, value, type, onclick) {
    this.#value = value;
    this.#type = type;
    this.#onclick = onclick;
    this.#calc = calc;
  }

  onButtonClick(event) {
    this.#onclick(this, event);
  }
  get value() {
    return this.#value;
  }
  get type() {
    return this.#type;
  }
  get button() {
    return this.#button;
  }
  render(container) {
    this.#container = container;
    this.#button = document.createElement('button');
    this.#button.setAttribute('class', 'button');
    this.#button.innerText = this.#value;
    this.#button.addEventListener('click', this.onButtonClick.bind(this));
    this.#container.appendChild(this.#button);
  }
}
