class Header {
  #calc;
  #replayButton;
  #hideButton;
  #closeButton;
  #container;
  #header;
  #calcName;
  #actionButtonsList;

  constructor(calc, onReplayButtonClick, onHideButtonClick, onCloseButtonClick) {
    this.#calc = calc;
    this.#replayButton = new ReplayButton(this.#calc, this, onReplayButtonClick, false);
    this.#hideButton = new HideButton(this.#calc, this, onHideButtonClick, false);
    this.#closeButton = new CloseButton(this.#calc, this, onCloseButtonClick, false);
  }

  get replayButton() {
    return this.#replayButton;
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
    this.#replayButton.render(this.#actionButtonsList);
    this.#hideButton.render(this.#actionButtonsList);
    this.#closeButton.render(this.#actionButtonsList);
    this.#header.appendChild(this.#calcName);
    this.#header.appendChild(this.#actionButtonsList);
    this.#container.appendChild(this.#header);
  }
}
