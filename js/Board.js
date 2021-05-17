class Board {
  #digitalButtonList = [];
  #operationButtonList = [];
  #equalityButton;
  #backspaceButton;
  #operationsList = ["+", "-", "*", "/"];
  #calc;
  #currentButton;
  #prevButton;
  #container;
  #board;
  #digitalButton;
  #operationButton;
  constructor(
    calc,
    onDigitalButtonClick,
    onOperationButtonClick,
    onEqualityButtonClick,
    onBackspaceButtonClick
  ) {
    this.#calc = calc;
    for (let i = 0; i < 10; i++) {
      this.#digitalButton = new DigitalButton(
        this,
        i.toString(),
        onDigitalButtonClick
      );
      this.#digitalButtonList.push(this.#digitalButton);
    }

    for (let l = 0; l < this.#operationsList.length; l++) {
      this.#operationButton = new OperationButton(
        this,
        this.#operationsList[l],
        onOperationButtonClick
      );
      this.#operationButtonList.push(this.#operationButton);
    }

    this.#equalityButton = new EqualityButton(this, onEqualityButtonClick);
    this.#backspaceButton = new BackspaceButton(this, onBackspaceButtonClick);
    this.#currentButton = this.#digitalButtonList[0];
  }
  get digitalButtonList() {
    return this.#digitalButtonList;
  }
  get operationButtonList() {
    return this.#operationButtonList;
  }
  get equalityButton() {
    return this.#equalityButton;
  }
  get backspaceButton() {
    return this.#backspaceButton;
  }
  get currentButton() {
    return this.#currentButton;
  }
  set currentButton(value) {
    this.#prevButton = this.#currentButton;
    this.#currentButton = value;
  }
  get prevButton() {
    return this.#prevButton;
  }
  render(containerId) {
    this.#container = containerId;
    this.#board = document.createElement("div");
    for (let i = 0; i < this.#digitalButtonList.length; i++) {
      this.#digitalButtonList[i].render(this.#board);
    }
    for (let j = 0; j < this.#operationButtonList.length; j++) {
      this.#operationButtonList[j].render(this.#board);
    }
    this.#backspaceButton.render(this.#board);
    this.#equalityButton.render(this.#board);
    this.#container.appendChild(this.#board);
  }
}
