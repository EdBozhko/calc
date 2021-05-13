class OperationButton extends Button {
  #board;
  constructor(board, value, onclick) {
    super(board, value, "operation", onclick);
    this.#board = board;
    // this.#board.operationsList.some((val) => val === value)
    //   ? console.log("OperationButton ok")
    //   : console.log("option is not available");
  }
}
