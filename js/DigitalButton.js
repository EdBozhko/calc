class DigitalButton extends Button {
  #board;
  constructor(board, value, onclick) {
    super(board, value, "digital", onclick);
    this.#board = board;
    if (isNaN(value)) {
      console.error("the value is not a number");
    } else if (/^[0-9]$/.test(value)) {
      // console.log("DigitalButton ok");
    } else {
      console.error("the value must be between 0 and 9");
    }
  }
}
