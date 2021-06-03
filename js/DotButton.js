class DotButton extends CalcButton {
  #calc;
  #board;

  constructor(calc, board, onclick, disabled) {
    super(calc, board, '.', 'dot', onclick, disabled);
    this.#calc = calc;
    this.#board = board;
  }

  render(container) {
    super.render(container);
    super.button.classList.add('button--digital');
  }
}
