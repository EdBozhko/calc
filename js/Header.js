class Header {
  #calc;
  #hideButton;
  #closeButton;
  #actionButtonsList;
  #header;
  #container;
  #calcName;
  constructor(calc, onHideButtonClick, onCloseButtonClick) {
    this.#calc = calc;
    this.#hideButton = new HideButton(this.#calc, this, onHideButtonClick);
    this.#closeButton = new CloseButton(this.#calc, this, onCloseButtonClick);
  }
  get hideButton() {
    return this.#hideButton;
  }
  get closeButton() {
    return this.#closeButton;
  }
  render(container) {
    this.#container = container;
    this.#header = document.createElement('header');
    this.#header.setAttribute('class', 'header-calc');
    this.#calcName = document.createElement('span');
    this.#calcName.setAttribute('class', 'header-calc__calc-name');
    this.#calcName.innerText = 'Калькулятор';
    this.#actionButtonsList = document.createElement('div');
    this.#actionButtonsList.setAttribute('class', 'header-calc__action-buttons-list');
    this.#hideButton.render(this.#actionButtonsList);
    this.#closeButton.render(this.#actionButtonsList);
    this.#header.appendChild(this.#calcName);
    this.#header.appendChild(this.#actionButtonsList);
    this.#container.appendChild(this.#header);
  }
}
