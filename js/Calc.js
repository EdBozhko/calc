// класс для сбора всех элементов калькулятора

class Calc {
  //объявление приватных переменных

  #display;
  #board;
  #processor;
  constructor() {
    this.onDigitalButtonPress = this.onDigitalButtonPress.bind(this); //для варианта с простой функцией, привязываем к calc(без этого функция кнопки передает в this кнопку, а не ссылку на сам калькулятор)
    // инициализируем создание доски с кнопками, процессора и дисплея
    this.#board = new Board(
      this,
      this.onDigitalButtonPress,
      this.onOperationButtonPress,
      this.onEqualityButtonPress,
      this.onOperationList
    ); // передаем функции отслеживания клика из самого калькулятора в аргументы конструктора class Board
    this.#processor = new Processors(this, this.onResult, this.onMemoValue);
    this.#display = new Display(this);
  }

  // -----------------------------
  // функции отслеважиния клика на кнопку в Calc

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

  onResult = (result) => {
    this.#display.result = result;
  };

  onMemoValue = (memoValue) => {
    this.#display.memoValue = memoValue;
  };
  // -----------------------------
  // чтобы получить доступ приватной переменной board , для доступа в других классах
  get board() {
    return this.#board;
  }
  get display() {
    return this.#display;
  }
}
