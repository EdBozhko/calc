class Board {
  #digitalButtonList = [];
  #operationButtonList = [];
  #equalityButton;
  #operationsList = ["+", "-", "*", "/"];
  #calc;
  constructor(
    calc,
    onDigitalButtonClick,
    onOperationButtonClick,
    onEqualityButtonClick
  ) {
    this.#digitalButtonList;
    this.#operationButtonList;
    this.#equalityButton;
    this.#calc = calc;

    for (let i = 0; i < 10; i++) {
      const digitalButton = new DigitalButton(this, i, onDigitalButtonClick);
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
  // get operationsList() {
  //   return this.#operationsList;
  // }
}
