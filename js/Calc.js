// класс для сбора всех элементов калькулятора

class Calc {
  //объявление приватных переменных
  #header;
  #display;
  #board;
  #processor;
  #container;
  #calc;
  #calcBox;
  #calcContainer;
  #index;
  #history = [];
  #replayHistory = [];
  #calcHidden;
  constructor(calcContainer, index) {
    this.#index = index;
    this.#calcContainer = calcContainer;
    this.onDigitalButtonPress = this.onDigitalButtonPress.bind(this); //для варианта с простой функцией, привязываем к calc(без этого функция кнопки передает в this кнопку, а не ссылку на сам калькулятор)
    // инициализируем создание доски с кнопками, процессора и дисплея
    this.onOperationButtonPress = this.onOperationButtonPress.bind(this);
    this.onEqualityButtonPress = this.onEqualityButtonPress.bind(this);
    this.onBackspaceButtonPress = this.onBackspaceButtonPress.bind(this);
    this.onClearButtonPress = this.onClearButtonPress.bind(this);
    this.onDotButtonPress = this.onDotButtonPress.bind(this);
    this.replayOne = this.replayOne.bind(this);
    this.#calcHidden = false;
    this.#header = new Header(this, this.onReplayButtonPress.bind(this), this.onHideButtonPress.bind(this), this.onCloseButtonPress.bind(this));
    this.#processor = new Processors(this, this.onResult, this.onMemoValue);
    this.#board = new Board(
      this.#calcContainer,
      this,
      this.onDigitalButtonPress,
      this.onOperationButtonPress,
      this.onEqualityButtonPress,
      this.onBackspaceButtonPress,
      this.onClearButtonPress,
      this.onDotButtonPress /* this.onNegativeButtonPress, */,
    );
    this.#display = new Display(this);
  }

  // -----------------------------
  // функции отслеважиния клика на кнопку в Calc
  onHistory(button) {
    this.#history.push(button);
  }
  replayOne(array, onComplete) {
    if (array.length === 0) {
      onComplete();
      return;
    }
    array[0].onButtonClick();
    array.splice(0, 1);
    setTimeout(() => this.replayOne(array, onComplete), 1000);
  }

  onReplayButtonPress() {
    console.log(this.#header.replayButton.disabled);
    if (this.#header.replayButton.disabled) {
      return
    }
    this.#header.replayButton.disabled = true;

    this.#replayHistory = [...this.#history];

    this.#history.length = 0;

    this.onClearButtonPress(this);
    setTimeout(() => {
      this.replayOne(this.#replayHistory, () => {
        this.#header.replayButton.disabled = false;
      });
    }, 1000);
  }
  hideCalc() {
    this.#calcHidden = true;
    this.#display.display.hidden = true;
    this.#board.board.hidden = true;
  }
  showCalc() {
    this.#calcHidden = false;
    this.#display.display.hidden = false;
    this.#board.board.hidden = false;
  }
  onHideButtonPress(button) {
    if (this.#calcHidden) {
      this.showCalc();
    } else {
      this.hideCalc();
    }
  }
  onCloseButtonPress(button) {
    this.#calcContainer.delete(this.#index);
    this.#calcBox.remove();
  }
  onDigitalButtonPress(button, event) {
    // вариант простой функции
    // this.#processor.onDigitalButtonPress(button); // обращаемся к функции процессора
    this.#calcContainer.onDigitalButtonPress(button, event);
  }

  // варианты со стрелочными функциями
  onOperationButtonPress(button, event) {
    // this.#processor.onOperationButtonPress(button);
    this.#calcContainer.onOperationButtonPress(button, event);
  }

  onClearButtonPress(button, event) {
    this.#calcContainer.onClearButtonPress(button, event);
  }

  onEqualityButtonPress(button, event) {
    // this.#processor.onEqualityButtonPress(button);
    this.#calcContainer.onEqualityButtonPress(button, event);
  }
  // onNegativeButtonPress = (button) => {
  //   this.#processor.onNegativeButtonPress(button);
  // };
  onDotButtonPress(button, event) {
    // this.#processor.onDotButtonPress(button);
    this.#calcContainer.onDotButtonPress(button, event);
  }
  onBackspaceButtonPress(button, event) {
    // this.#processor.onBackspaceButtonPress(button);
    this.#calcContainer.onBackspaceButtonPress(button, event);
  }

  onResult = (result) => {
    this.#display.result = result;
    this.#display.displayResult.innerText = result;
  };

  onMemoValue = (memoValue) => {
    this.#display.memoValue = memoValue;
    this.#display.displayMemo.innerText = memoValue;
  };
  // -----------------------------
  // чтобы получить доступ приватной переменной board , для доступа в других классах
  get board() {
    return this.#board;
  }
  get display() {
    return this.#display;
  }

  get processor() {
    return this.#processor;
  }
  get index() {
    return this.#index;
  }
  render(containerId) {
    this.#container = document.getElementById(containerId);
    this.#calcBox = document.createElement('div');
    this.#calcBox.setAttribute('class', 'calculator-container');
    this.#calc = document.createElement('div');
    this.#calc.setAttribute('class', 'calculator');
    this.#header.render(this.#calc);
    this.#display.render(this.#calc);
    this.#board.render(this.#calc);
    this.#calcBox.appendChild(this.#calc);
    this.#container.appendChild(this.#calcBox);
    this.onResult(this.#processor.stack);
  }
}

// const calc = new Calc();
// calc.render("container");
