class ReplayButton extends Button {
    #calc;
    #header;
    constructor(calc, header, onclick, disabled) {
      super(calc, '⭯', 'replay', onclick, disabled);
      this.#calc = calc;
      this.#header = header;
    }
  
    render(container) {
      super.render(container);
      super.button.classList.add('header-calc__replay-button');
    }
}