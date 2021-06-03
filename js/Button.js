class Button {
  #calc;
  #value;
  #type;
  #onclick;
  #disabled;
  #container;
  #button;
  /**
   * Base class for creating buttons
   * @param {object} calc Accepts parent calc
   * @param {string} value Button value. For example: '1', '+', '⭯'
   * @param {string} type Button type. For example: 'digit', 'operation', 'equality'
   * @param {function} onclick Accepts onclick functions for different buttons types
   * @param {boolean} disabled Takes a boolean value about the disabled state of the button (true or false)
   * @returns {object} new instance of class
   */
  constructor(calc, value, type, onclick, disabled) {
    this.#calc = calc;
    this.#value = value;
    this.#type = type;
    this.#onclick = onclick;
    this.#disabled = disabled;
  }
  /**
   *
   * @param {*} event
   */
  onButtonClick(event) {
    this.#onclick(this, event);
  }

  get value() {
    return this.#value;
  }

  get type() {
    return this.#type;
  }

  get disabled() {
    return this.#disabled;
  }

  set disabled(value) {
    this.#disabled = value;
    this.#button.disabled = value;
  }

  get button() {
    return this.#button;
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
