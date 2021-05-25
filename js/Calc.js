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
    this.#header = new Header(this, this.onHideButtonPress.bind(this), this.onCloseButtonPress.bind(this));
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
    this.#processor = new Processors(this, this.onResult, this.onMemoValue);
    this.#display = new Display(this);
  }

  // -----------------------------
  // функции отслеважиния клика на кнопку в Calc
  onHistory(button) {
    this.#history.push(button);
    console.log(this.#history);
  }

  onHideButtonPress(button) {
    this.#display.display.hasAttribute('hidden') ? (this.#display.display.hidden = false) : (this.#display.display.hidden = true);
    this.#board.board.hasAttribute('hidden') ? (this.#board.board.hidden = false) : (this.#board.board.hidden = true);
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
