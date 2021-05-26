class DigitalButton extends CalcButton {
  #board;
  #calc;
  constructor(calc, board, value, onclick, disabled) {
    super(calc, board, value, 'digital', onclick, disabled);
    this.#board = board;
    this.#calc = calc;

    if (isNaN(value)) {
      console.error('the value is not a number');
    } else {
      if (!/^[0-9]$/.test(value)) {

        console.error('the value must be between 0 and 9');
      }
    }
  }
  render(container) {
    super.render(container);
    super.button.classList.add('button--digital');
  }
}
