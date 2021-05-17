class Board {
  #digitalButtonList = [];
  #operationButtonList = [];
  #equalityButton;
  #backspaceButton;
  #operationsList = ["+", "-", "*", "/"];
  #calc;
  #currentButton;
  #prevButton;
  constructor(
    calc,
    onDigitalButtonClick,
    onOperationButtonClick,
    onEqualityButtonClick,
    onBackspaceButtonClick
  ) {
    this.#calc = calc;

    for (let i = 0; i < 10; i++) {
      const digitalButton = new DigitalButton(
        this,
        i.toString(),
        onDigitalButtonClick
      );
      this.#digitalButtonList.push(digitalButton);
    }

    for (let l = 0; l < this.#operationsList.length; l++) {
      const operationButton = new OperationButton(
        this,
        this.#operationsList[l],
        onOperationButtonClick
      );
      this.#operationButtonList.push(operationButton);
    }

    this.#equalityButton = new EqualityButton(this, onEqualityButtonClick);
    this.#backspaceButton = new BackspaceButton(this, onBackspaceButtonClick);
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
}
