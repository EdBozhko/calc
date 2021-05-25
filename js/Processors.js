class Processors {
  // класс для сбора и обработки входящих данных

  #calc; //объявление приватных переменных
  #stack;
  #stackMemo;
  #stackHistory;
  #onResult;
  #onMemoValue;
  /**
   *
   * @param {Calc} calc
   * @param {()=>{}} onResult
   */
  constructor(calc, onResult, onMemoValue) {
    this.#calc = calc; // приинимаем в аргумент и сохраняем ссылку на Calc, который создал процессор
    this.#stack = '0'; // стек для хранения ТЕКУЩЕГО ЗНАЧЕНИЯ, ПОСЛЕДНЕЙ ОПЕРАЦИИ, ИСТОРИЯ ОПЕРАЦИЙ
    this.#stackMemo = [];
    this.#stackHistory = [];
    this.#onMemoValue = onMemoValue;
    this.#onResult = onResult;
    this.onDigitalButtonPress = this.onDigitalButtonPress.bind(this);
    this.onOperationButtonPress = this.onOperationButtonPress.bind(this);
    this.onEqualityButtonPress = this.onEqualityButtonPress.bind(this);
    this.onBackspaceButtonPress = this.onBackspaceButtonPress.bind(this);
    this.onClearButtonPress = this.onClearButtonPress.bind(this);
  }
  get stack() {
    return this.#stack;
  }
  onDigitalButtonPress(button) {
    // функция для получения цифровой кнопки, на которой произошел клик

    if (this.#calc.board.prevButton.type === 'equality') {
      this.#stackMemo.length = 0;
      this.#stack = button.value;
      this.#stackMemo.push(this.#stack);
    } else {
      if (this.#stack === '0' || this.#calc.board.prevButton.type === 'operation') {
        this.#stack = button.value;
        this.#stackMemo.push(this.#stack);
      } else {
        this.#stack = this.#stack + button.value;
        this.#stackMemo.push(button.value);
      }
    }

    this.#onResult(this.#stack);
    this.#onMemoValue(this.#stackMemo.join(''));
  }

  onOperationButtonPress(button) {
    // функция для получения операционной кнопки, на которой произошел клик

    if (this.#calc.board.prevButton.type === 'operation') {
      this.#stackMemo.pop();
      this.#stackMemo.push(button.value); // к текущему значению прибавляется значение кнопки, на которой произошел клик
    } else {
      if (this.#calc.board.prevButton.type === 'equality') {
        this.#stackMemo.length = 0;
        this.#stackMemo.push(this.#stack); // к текущему значению прибавляется значение кнопки, на которой произошел клик
        this.#stackMemo.push(button.value); // к текущему значению прибавляется значение кнопки, на которой произошел клик
      } else {
        this.#stackMemo.push(button.value); // к текущему значению прибавляется значение кнопки, на которой произошел клик
      }
    }
    this.#onResult(this.#stack);
    this.#onMemoValue(this.#stackMemo.join(''));
  }

  onClearButtonPress(button) {
    this.#stackMemo.length = 0;
    this.#stack = this.#calc.board.digitalButtonList[0].value;
    this.#onResult(this.#stack);
    this.#onMemoValue(this.#stackMemo.join(''));
  }

  onEqualityButtonPress(button) {
    // функция для получения кнопки равенства, на которой произошел клик

    this.#stack = eval(this.#stackMemo.join('')).toString();
    if (isNaN(this.#stack)) {
      this.#stack = 'Результат не определен';
      this.#stackMemo.length = 0;
    } else {
      this.#stackMemo.push(button.value); // к текущему значению прибавляется значение кнопки, на которой произошел клик
      this.#stackHistory.push(this.#stackMemo.join('') + this.#stack);
    }

    this.#onResult(this.#stack);
    this.#onMemoValue(this.#stackMemo.join(''));
  }
  // onNegativeButtonPress(button) {

  // }

  // onDotButtonPress(button) {

  // }

  onBackspaceButtonPress(button) {
    if (this.#calc.board.prevButton.type === 'equality') {
      this.#stackMemo.length = 0;
    } else {
      this.#stack = this.#stack.slice(0, -1);
      this.#stackMemo.pop();
      if (this.#stackMemo.length === 0 && this.#stack.length === 0) {
        this.#stack = this.#calc.board.digitalButtonList[0].value;
      }
    }

    this.#onResult(this.#stack);
    this.#onMemoValue(this.#stackMemo.join(''));
  }
}
