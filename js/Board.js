class Board {
  #digitalButtonList = [];
  #operationButtonList = [];
  #equalityButton;
  #backspaceButton;
  #dotButton
  #operationsList = ["+", "-", "*", "/"];
  #calc;
  #currentButton;
  #prevButton;
  #container;
  #board;
  #digitalButton;
  #digitalBoard;
  #operationBoard;
  #operationButton;
  constructor(
    calc,
    onDigitalButtonClick,
    onOperationButtonClick,
    onEqualityButtonClick,
    onDotButtonClick,
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
    this.#dotButton = new DotButton(this, onDotButtonClick);
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
  get dotButton() {
    return this.#dotButton;
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
    this.#board.setAttribute("class", "board");

    this.#digitalBoard = document.createElement("div");
    this.#digitalBoard.setAttribute("class", "board__digital-board");

    this.#operationBoard = document.createElement("div");
    this.#operationBoard.setAttribute("class", "operation-board");

    for (let i = 0; i < this.#digitalButtonList.length; i++) {
      this.#digitalButtonList[i].render(this.#digitalBoard);
    }
    for (let j = 0; j < this.#operationButtonList.length; j++) {
      this.#operationButtonList[j].render(this.#operationBoard);
    }

    this.#backspaceButton.render(this.#operationBoard);

    this.#equalityButton.render(this.#operationBoard);
    this.#dotButton.render(this.#digitalBoard);
    this.#board.appendChild(this.#digitalBoard);
    this.#board.appendChild(this.#operationBoard);

    this.#container.appendChild(this.#board);
  }
}
