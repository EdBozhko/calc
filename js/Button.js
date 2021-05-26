class Button {
  #calc;
  #value;
  #type;
  #onclick;
  #disabled;
  #container;
  #button;
  constructor(calc, value, type, onclick, disabled) {
    this.#calc = calc;
    this.#value = value;
    this.#type = type;
    this.#onclick = onclick;
    this.#disabled = disabled;
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
  get disabled() {
    return this.#disabled;
  }
  set disabled(value) {
    this.#disabled = value;
    this.#container.disabled = value
  }
  render(container) {
    this.#container = container;
    this.#button = document.createElement('button');
    this.#button.disabled = this.#disabled;
    this.#button.setAttribute('class', 'button');
    this.#button.innerText = this.#value;
    this.#button.addEventListener('click', this.onButtonClick.bind(this));
    this.#container.appendChild(this.#button);
  }
}
