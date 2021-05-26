class ReplayButton extends Button {
    #calc;
    #header;
    constructor(calc, header, onclick) {
      super(calc, '⭯', 'replay', onclick);
      this.#calc = calc;
      this.#header = header;
    }
  
    render(container) {
      super.render(container);
      super.button.classList.add('header-calc__replay-button');
    }
}