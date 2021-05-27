class Processors {
  // класс для сбора и обработки входящих данных

  #calc; //объявление приватных переменных
  #stack;
  #stackMemo;
  #onResult;
  #onMemoValue;
  #calcResult;
  /**
   *
   * @param {Calc} calc
   * @param {()=>{}} onResult
   */
  constructor(calc, onResult, onMemoValue) {
    this.#calc = calc; // приинимаем в аргумент и сохраняем ссылку на Calc, который создал процессор
    this.#stack = []; // стек для хранения ТЕКУЩЕГО ЗНАЧЕНИЯ, ПОСЛЕДНЕЙ ОПЕРАЦИИ, ИСТОРИЯ ОПЕРАЦИЙ
    this.#stackMemo = [];
    this.#onMemoValue = onMemoValue;
    this.#onResult = onResult;
    this.onDigitalButtonPress = this.onDigitalButtonPress.bind(this);
    this.onOperationButtonPress = this.onOperationButtonPress.bind(this);
    this.onEqualityButtonPress = this.onEqualityButtonPress.bind(this);
    this.onBackspaceButtonPress = this.onBackspaceButtonPress.bind(this);
    this.onClearButtonPress = this.onClearButtonPress.bind(this);
    this.onDotButtonPress = this.onDotButtonPress.bind(this);
  }
  get stack() {
    return this.#stack;
  }
  onDigitalButtonPress(button) {
    // функция для получения цифровой кнопки, на которой произошел клик

    if (this.#stack.length > 10) {
      return;
    }
    if (this.#calc.board.prevButton.type === 'equality') {
      this.#stackMemo.length = 0;
      this.#stack.length = 0;
      this.#stack.push(button.value);
    } else {
      if (
        (this.#stack[0] === '0' && this.#stack.length === 1) ||
        this.#calc.board.prevButton.type === 'operation' ||
        (this.#calc.board.prevButton.type === 'backspace' && this.#stackMemo.length > 0)
      ) {
        this.#stack.length = 0;
        this.#stack.push(button.value);
      } else {
        this.#stack.push(button.value);
      }
    }

    this.#onResult(this.#stack.join(''));
    this.#onMemoValue(this.#stackMemo.join(''));
  }

  onOperationButtonPress(button) {
    // функция для получения операционной кнопки, на которой произошел клик
    const operationsList = this.#calc.board.operationsList;
    const stackMemoLastElement = this.#stackMemo[this.#stackMemo.length - 1];
    if (operationsList[operationsList.indexOf(stackMemoLastElement)] === stackMemoLastElement) {
      this.#stackMemo = this.#stackMemo.concat(this.#stack);
      this.#stack.length = 0;
      this.#stack = this.#stack.concat(eval(this.#stackMemo.join('')).toString());
      this.#stackMemo.length = 0;
      this.#stackMemo = this.#stackMemo.concat(this.#stack);
      this.#stackMemo.push(button.value);
      this.#onResult(this.#stack.join(''));
      this.#onMemoValue(this.#stackMemo.join(''));
      return;
    }

    if (this.#calc.board.prevButton.type === 'equality' || this.#calc.board.prevButton.type === 'operation') {
      this.#stackMemo.length = 0;
      this.#stackMemo = this.#stackMemo.concat(this.#stack);
      this.#stackMemo.push(button.value);
    } else {
      this.#stackMemo = this.#stackMemo.concat(this.#stack);
      this.#stackMemo.push(button.value);
    }
    this.#onResult(this.#stack.join(''));
    this.#onMemoValue(this.#stackMemo.join(''));
  }

  onClearButtonPress(button) {
    this.#stackMemo.length = 0;
    this.#stack.length = 0;
    this.#stack.push(this.#calc.board.digitalButtonList[0].value);
    this.#onResult(this.#stack);
    this.#onMemoValue(this.#stackMemo.join(''));
  }

  onEqualityButtonPress(button) {
    // функция для получения кнопки равенства, на которой произошел клик
    if (this.#calc.board.prevButton.type === 'equality') {
      this.#stackMemo.length = 0;
      this.#stackMemo = this.#stackMemo.concat(this.#stack);
      this.#stackMemo.push(button.value);
    } else {
      this.#stackMemo = this.#stackMemo.concat(this.#stack);
      if (isNaN(eval(this.#stackMemo.join('')))) {
        this.#stack.length = 0;
        this.#stackMemo.length = 0;
        this.#stack.push('Результат не определен');
      } else {
        this.#stack.length = 0;
        this.#stack = this.#stack.concat(eval(this.#stackMemo.join('')).toString());
        this.#stackMemo.push(button.value);
      }
    }
    this.#calcResult = this.#stack.join('');
    this.#onResult(this.#calcResult);
    this.#onMemoValue(this.#stackMemo.join(''));
  }
  // onNegativeButtonPress(button) {

  // }

  onDotButtonPress(button) {
    if (this.#stack.includes(this.#calc.board.dotButton.value)) {
      return;
    }
    if (this.#calc.board.prevButton.type === 'operation') {
      this.#stack.length = 0;
      this.#calc.board.digitalButtonList[0].onButtonClick();
      this.#stack.push(button.value);
    } else {
      if (this.#calc.board.prevButton.type === 'equality') {
        this.#stackMemo.length = 0;
        this.#stack.length = 0;
        this.#calc.board.digitalButtonList[0].onButtonClick();
        this.#stack.push(button.value);
      } else {
        this.#stack.push(button.value);
      }
    }

    this.#onResult(this.#stack.join(''));
    this.#onMemoValue(this.#stackMemo.join(''));
  }

  onBackspaceButtonPress(button) {
    if (this.#calc.board.prevButton.type === 'operation') {
      return;
    }
    if (this.#calc.board.prevButton.type === 'equality') {
      this.#stackMemo.length = 0;
    } else {
      this.#stack.pop();
      if (this.#stack.length === 0) this.#calc.board.digitalButtonList[0].onButtonClick();
    }

    this.#onResult(this.#stack.join(''));
    this.#onMemoValue(this.#stackMemo.join(''));
  }
}
