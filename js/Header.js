class Header {
  #calc;
  #header;
  #container;
  #calcName;
  constructor(calc) {
    this.#calc = calc;
  }
  render(container) {
    this.#container = container;
    this.#header = document.createElement("header");
    this.#header.setAttribute("class", "header");
    this.#calcName = document.createElement("span");
    this.#calcName.innerText = "Калькулятор";
    this.#header.appendChild(this.#calcName);
    this.#container.appendChild(this.#header);
  }
}
