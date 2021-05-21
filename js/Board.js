class Board {
  #digitalButtonList = [];
  #operationButtonList = [];
  #equalityButton;
  // #negativeButton;
  // #dotButton
  #clearButton;
  #backspaceButton;
  #operationsList = ["+", "-", "*", "/"];
  #calc;
  #currentButton;
  #prevButton;
  #container;
  #board;
  #boardContainer;
  #digitalButton;
  #digitalBoard;
  #operationBoard;
  #additionalFunctionsBoard;
  #operationButton;
  constructor(
    calc,
    onDigitalButtonClick,
    onOperationButtonClick,
    onEqualityButtonClick,
    onBackspaceButtonClick,
    onClearButtonClick
    // onNegativeButtonClick,
    // onDotButtonClick,
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
    this.#clearButton = new ClearButton(this, onClearButtonClick);
    // this.#negativeButton = new NegativeButton(this, onNegativeButtonClick);
    // this.#dotButton = new DotButton(this, onDotButtonClick);
    this.#currentButton = this.#digitalButtonList[0];
    this.#prevButton = this.#digitalButtonList[0];
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
  get clearButton() {
    return this.#clearButton;
  }
  // get negativeButton() {
  //   return this.#negativeButton;
  // }
  // get dotButton() {
  //   return this.#dotButton;
  // }
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
  get board() {
    return this.#board;
  }
  get calc() {
    return this.#calc;
  }
  get operationsList() {
    return this.#operationsList;
  }
  render(container) {
    this.#container = container;
    this.#board = document.createElement("div");
    this.#board.setAttribute("class", "board");

    this.#boardContainer = document.createElement("div");
    this.#boardContainer.setAttribute("class", "board-container");

    this.#additionalFunctionsBoard = document.createElement("div");
    this.#additionalFunctionsBoard.setAttribute(
      "class",
      "board__additional-functions-board"
    );

    this.#digitalBoard = document.createElement("div");
    this.#digitalBoard.setAttribute("class", "board__digital-board");

    this.#operationBoard = document.createElement("div");
    this.#operationBoard.setAttribute("class", "board__operation-board");

    for (let i = 0; i < this.#digitalButtonList.length; i++) {
      this.#digitalButtonList[i].render(this.#digitalBoard);
    }
    for (let j = 0; j < this.#operationButtonList.length; j++) {
      this.#operationButtonList[j].render(this.#operationBoard);
    }

    this.#backspaceButton.render(this.#operationBoard);

    this.#equalityButton.render(this.#operationBoard);
    this.#clearButton.render(this.#additionalFunctionsBoard)
    // this.#negativeButton.render(this.#digitalBoard);
    // this.#dotButton.render(this.#digitalBoard);
    this.#boardContainer.appendChild(this.#additionalFunctionsBoard);
    this.#boardContainer.appendChild(this.#digitalBoard);
    this.#boardContainer.appendChild(this.#operationBoard);
    this.#board.appendChild(this.#boardContainer);

    this.#container.appendChild(this.#board);
  }
}
