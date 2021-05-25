class CalcContainer {
  #calcItems;
  #calcContainer;
  #newCalcButton;
  #index = 0;
  #toggle;
  #newCalc;
  constructor(buttonContainer, toggleContainer, containerId) {
    this.#calcItems = new Map();
    this.#calcContainer = this;
    this.#newCalcButton = new NewCalcButton(this, containerId);
    this.#newCalcButton.render(buttonContainer);
    this.#toggle = new Toggle();
    this.#toggle.render(toggleContainer);
    this.onDigitalButtonPress = this.onDigitalButtonPress.bind(this);
    this.onOperationButtonPress = this.onOperationButtonPress.bind(this);
    this.onEqualityButtonPress = this.onEqualityButtonPress.bind(this);
    this.onBackspaceButtonPress = this.onBackspaceButtonPress.bind(this);
    this.onClearButtonPress = this.onClearButtonPress.bind(this);
    this.onDotButtonPress = this.onDotButtonPress.bind(this);
  }
  get calcContainer() {
    return this.#calcContainer;
  }
  get toggle() {
    return this.#toggle;
  }

  add(containerId) {
    this.#index++;
    this.#newCalc = new Calc(this, this.#index);
    this.#calcItems.set(this.#index, this.#newCalc);
    this.#newCalc.render(containerId);
  }
  delete(index) {
    this.#calcItems.delete(index);
  }

  syncMode(button, event, funcPress, list) {
    if (this.#toggle.sync) {
      if (event instanceof CustomEvent) {
        funcPress(button);
      } else {
        funcPress(button);
        this.#calcItems.forEach((calc) => {
          if (calc !== button.board.calc) {
            const customEvent = new CustomEvent('fakeClick');
            list(calc, button, customEvent);
          }
        });
      }
    } else {
      funcPress(button);
    }
  }

  onDigitalButtonPress(button, event) {
    this.syncMode(button, event, button.board.calc.processor.onDigitalButtonPress, (calc, button, customEvent) => {
      calc.board.digitalButtonList[parseInt(button.value)].onButtonClick(customEvent);
    });
  }
  onOperationButtonPress(button, event) {
    this.syncMode(button, event, button.board.calc.processor.onOperationButtonPress, (calc, button, customEvent) => {
      calc.board.operationButtonList[button.board.operationsList.indexOf(button.value)].onButtonClick(customEvent);
    });
  }
  onDotButtonPress(button, event) {
    this.syncMode(button, event, button.board.calc.processor.onDotButtonPress, (calc, button, customEvent) => {
      calc.board.dotButton.onButtonClick(customEvent);
    });
  }
  onClearButtonPress(button, event) {
    this.syncMode(button, event, button.board.calc.processor.onClearButtonPress, (calc, button, customEvent) => {
      calc.board.clearButton.onButtonClick(customEvent);
    });
  }
  onEqualityButtonPress(button, event) {
    this.syncMode(button, event, button.board.calc.processor.onEqualityButtonPress, (calc, button, customEvent) => {
      calc.board.equalityButton.onButtonClick(customEvent);
    });
  }
  onBackspaceButtonPress(button, event) {
    this.syncMode(button, event, button.board.calc.processor.onBackspaceButtonPress, (calc, button, customEvent) => {
      calc.board.backspaceButton.onButtonClick(customEvent);
    });
  }
}
const a = new CalcContainer(document.querySelector('.main-header'), document.querySelector('.main-header'), 'container');
