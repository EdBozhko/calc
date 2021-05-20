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
    this.#toggle.render(toggleContainer)
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
    console.log(this.#calcItems);
    console.log(`prev ${this.#newCalc.board.prevButton.type}`);
    console.log(`current ${this.#newCalc.board.currentButton.type}`);
  }
  remove(index) {
    this.#calcItems.delete(index);
  }

  onDigitalButtonPress(button, event) {
    if (this.#toggle.sync) {
      if (event instanceof CustomEvent) {
        button.board.calc.processor.onDigitalButtonPress(button);
      } else {
        button.board.calc.processor.onDigitalButtonPress(button);

        this.#calcItems.forEach((calc) => {
          if (calc !== button.board.calc) {
            const customEvent = new CustomEvent("fakeClick");
            calc.board.digitalButtonList[parseInt(button.value)].onButtonClick(
              customEvent
            );
          }
        });
      }
    } else {
      button.board.calc.processor.onDigitalButtonPress(button);
    }
  }
  onOperationButtonPress(button, event) {
    if (this.#toggle.sync) {
      if (event instanceof CustomEvent) {
        button.board.calc.processor.onOperationButtonPress(button);
      } else {
        button.board.calc.processor.onOperationButtonPress(button);
        this.#calcItems.forEach((calc) => {
          if (calc !== button.board.calc) {
            const customEvent = new CustomEvent("fakeClick");
            calc.board.operationButtonList[
              button.board.operationsList.indexOf(button.value)
            ].onButtonClick(customEvent);
          }
        });
      }
    } else {
      button.board.calc.processor.onOperationButtonPress(button);
    }
  }
  onEqualityButtonPress(button, event) {
    if (this.#toggle.sync) {
      if (event instanceof CustomEvent) {
        button.board.calc.processor.onEqualityButtonPress(button);
      } else {
        button.board.calc.processor.onEqualityButtonPress(button);
        this.#calcItems.forEach((calc) => {
          if (calc !== button.board.calc) {
            const customEvent = new CustomEvent("fakeClick");
            calc.board.equalityButton.onButtonClick(customEvent);
          }
        });
      }
    } else {
      button.board.calc.processor.onEqualityButtonPress(button);
    }
  }
  onBackspaceButtonPress(button, event) {
    if (this.#toggle.sync) {
      if (event instanceof CustomEvent) {
        button.board.calc.processor.onBackspaceButtonPress(button);
      } else {
        button.board.calc.processor.onBackspaceButtonPress(button);
        this.#calcItems.forEach((calc) => {
          if (calc !== button.board.calc) {
            const customEvent = new CustomEvent("fakeClick");
            calc.board.backspaceButton.onButtonClick(customEvent);
          }
        });
      }
    } else {
      button.board.calc.processor.onBackspaceButtonPress(button);
    }
  }
}
const a = new CalcContainer(document.querySelector(".main-header"), document.querySelector(".main-header"), "container");
