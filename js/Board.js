class Board {
  #digitalButtonList = [];
  #operationButtonList = [];
  #operationsList = ['+', '-', '*', '/'];
  #calcContainer;
  #calc;
  #digitalButton;
  #operationButton;
  #equalityButton;
  #backspaceButton;
  #clearButton;
  #dotButton;
  #currentButton;
  #prevButton;
  #container;
  #board;
  #boardContainer;
  #operationBoard;
  #digitalBoard;
  #additionalFunctionsBoard;

  constructor(calcContainer, calc, onDigitalButtonClick, onOperationButtonClick, onEqualityButtonClick, onBackspaceButtonClick, onClearButtonClick, onDotButtonClick) {
    this.#calcContainer = calcContainer;
    this.#calc = calc;

    for (let i = 0; i < 10; i++) {
      this.#digitalButton = new DigitalButton(this.#calc, this, i.toString(), onDigitalButtonClick, false);
      this.#digitalButtonList.push(this.#digitalButton);
    }

    for (let l = 0; l < this.#operationsList.length; l++) {
      this.#operationButton = new OperationButton(this.#calc, this, this.#operationsList[l], onOperationButtonClick, false);
      this.#operationButtonList.push(this.#operationButton);
    }

    this.#equalityButton = new EqualityButton(this.#calc, this, onEqualityButtonClick, false);
    this.#backspaceButton = new BackspaceButton(this.#calc, this, onBackspaceButtonClick, false);
    this.#clearButton = new ClearButton(this.#calc, this, onClearButtonClick, false);
    this.#dotButton = new DotButton(this.#calc, this, onDotButtonClick, false);
    this.#currentButton = this.#digitalButtonList[0];
  }

  get calc() {
    return this.#calc;
  }

  get operationsList() {
    return this.#operationsList;
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

  get clearButton() {
    return this.#clearButton;
  }

  get dotButton() {
    return this.#dotButton;
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

  get board() {
    return this.#board;
  }

  render(container) {
    this.#container = container;
    this.#board = document.createElement('div');
    this.#board.setAttribute('class', 'board');
    this.#boardContainer = document.createElement('div');
    this.#boardContainer.setAttribute('class', 'board-container');
    this.#additionalFunctionsBoard = document.createElement('div');
    this.#additionalFunctionsBoard.setAttribute('class', 'board__additional-functions-board');
    this.#digitalBoard = document.createElement('div');
    this.#digitalBoard.setAttribute('class', 'board__digital-board');
    this.#operationBoard = document.createElement('div');
    this.#operationBoard.setAttribute('class', 'board__operation-board');
    for (let i = 0; i < this.#digitalButtonList.length; i++) {
      this.#digitalButtonList[i].render(this.#digitalBoard);
    }
    for (let j = 0; j < this.#operationButtonList.length; j++) {
      this.#operationButtonList[j].render(this.#operationBoard);
    }
    this.#equalityButton.render(this.#operationBoard);
    this.#backspaceButton.render(this.#operationBoard);
    this.#clearButton.render(this.#additionalFunctionsBoard);
    this.#dotButton.render(this.#digitalBoard);
    this.#boardContainer.appendChild(this.#additionalFunctionsBoard);
    this.#boardContainer.appendChild(this.#digitalBoard);
    this.#boardContainer.appendChild(this.#operationBoard);
    this.#board.appendChild(this.#boardContainer);
    this.#container.appendChild(this.#board);
    this.#digitalButtonList[0].onButtonClick();
  }
}
