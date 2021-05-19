// класс для сбора всех элементов калькулятора

class Calc {
  //объявление приватных переменных
  #header;
  #display;
  #board;
  #processor;
  #container;
  #calc;
  #calcContainer;
  constructor() {
    this.onDigitalButtonPress = this.onDigitalButtonPress.bind(this); //для варианта с простой функцией, привязываем к calc(без этого функция кнопки передает в this кнопку, а не ссылку на сам калькулятор)
    // инициализируем создание доски с кнопками, процессора и дисплея
    this.#header = new Header(
      this,
      this.onHideButtonPress.bind(this),
      this.onCloseButtonPress.bind(this)
    );
    this.#board = new Board(
      this,
      this.onDigitalButtonPress,
      this.onOperationButtonPress,
      this.onEqualityButtonPress,
      // this.onNegativeButtonPress,
      // this.onDotButtonPress,
      this.onBackspaceButtonPress
    ); // передаем функции отслеживания клика из самого калькулятора в аргументы конструктора class Board
    this.#processor = new Processors(this, this.onResult, this.onMemoValue);
    this.#display = new Display(this);
  }

  // -----------------------------
  // функции отслеважиния клика на кнопку в Calc

  onHideButtonPress(button) {
    this.#header.hideButton.hide(this.#display.display);
    this.#header.hideButton.hide(this.#board.board);
  }
  onCloseButtonPress(button) {
    this.#header.closeButton.close(this.#calcContainer);
  }
  onDigitalButtonPress(button) {
    // вариант простой функции
    this.#processor.onDigitalButtonPress(button); // обращаемся к функции процессора
  }

  // варианты со стрелочными функциями
  onOperationButtonPress = (button) => {
    this.#processor.onOperationButtonPress(button);
  };

  onEqualityButtonPress = (button) => {
    this.#processor.onEqualityButtonPress(button);
  };
  // onNegativeButtonPress = (button) => {
  //   this.#processor.onNegativeButtonPress(button);
  // };
  // onDotButtonPress = (button) => {
  //   this.#processor.onDotButtonPress(button);
  // };
  onBackspaceButtonPress = (button) => {
    this.#processor.onBackspaceButtonPress(button);
  };

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

  render(containerId) {
    this.#container = document.getElementById(containerId);
    this.#calcContainer = document.createElement("div");
    this.#calcContainer.setAttribute("class", "calculator-container");
    this.#calc = document.createElement("div");
    this.#calc.setAttribute("class", "calculator");
    this.#header.render(this.#calc);
    this.#display.render(this.#calc);
    this.#board.render(this.#calc);
    this.#calcContainer.appendChild(this.#calc);
    this.#container.appendChild(this.#calcContainer);
    this.onResult(this.#processor.stack);
  }
}

// const calc = new Calc();
// calc.render("container");
