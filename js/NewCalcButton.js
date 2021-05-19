class NewCalcButton extends Button {
    #newCalc
  constructor() {
    super("Створити новий калькулятор", "newCalc", onclick);
    
  }
  onButtonClick(event) {
      this.#newCalc = new Calc()
      this.#newCalc.render("container")
  }
}

const a = new NewCalcButton()
a.render(document.querySelector('header'))