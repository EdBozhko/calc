class Processors {
  // класс для сбора и обработки входящих данных

  #calc; //объявление приватных переменных
  #stack;
  #stackMemo;
  #stackHistory;
  #onResult;
  #onMemoValue;
  #calcContainer
  /**
   *
   * @param {Calc} calc
   * @param {()=>{}} onResult
   */
  constructor(calc, calcContainer, onResult, onMemoValue) {
    this.#calc = calc; // приинимаем в аргумент и сохраняем ссылку на Calc, который создал процессор
    this.#stack = "0"; // стек для хранения ТЕКУЩЕГО ЗНАЧЕНИЯ, ПОСЛЕДНЕЙ ОПЕРАЦИИ, ИСТОРИЯ ОПЕРАЦИЙ
    this.#stackMemo = [];
    this.#stackHistory = [];
    this.#onMemoValue = onMemoValue;
    this.#onResult = onResult;
    this.#calcContainer = calcContainer
  }
  get stack() {
    return this.#stack;
  }
  onDigitalButtonPress(button) {
    // функция для получения цифровой кнопки, на которой произошел клик

    console.log(button);
    console.log(`button value ${button.value}`);

    if (

      this.#calc.board.prevButton.type === "equality"
    ) {
      this.#stackMemo.length = 0;
      this.#stack = button.value;
      this.#stackMemo.push(this.#stack);
    } else {
      if (
        this.#stack === "0" ||
        this.#calc.board.prevButton.type === "operation"
      ) {
        this.#stack = button.value;
        this.#stackMemo.push(this.#stack);
      } else {
        this.#stack = this.#stack + button.value;
        this.#stackMemo.push(button.value);
      }
    }

    console.log(`stack ${this.#stack}`);
    console.log(`stack memo ${this.#stackMemo}`);

    this.#onResult(this.#stack);
    this.#onMemoValue(this.#stackMemo.join(""));
  }

  onOperationButtonPress(button) {
    // функция для получения операционной кнопки, на которой произошел клик

    console.log(button);
    console.log(`button value ${button.value}`);
    if (this.#calc.board.prevButton.type === "operation") {
      this.#stackMemo.pop();
      this.#stackMemo.push(button.value); // к текущему значению прибавляется значение кнопки, на которой произошел клик

    } else {
      if (this.#calc.board.prevButton.type === "equality") {
        this.#stackMemo.length = 0;
        this.#stackMemo.push(this.#stack); // к текущему значению прибавляется значение кнопки, на которой произошел клик
        this.#stackMemo.push(button.value); // к текущему значению прибавляется значение кнопки, на которой произошел клик
      } else {
        this.#stackMemo.push(button.value); // к текущему значению прибавляется значение кнопки, на которой произошел клик
      }
    }
    console.log(`stack ${this.#stack}`);
    console.log(`stack memo ${this.#stackMemo}`);
    this.#onResult(this.#stack);
    this.#onMemoValue(this.#stackMemo.join(""));
  }

  onEqualityButtonPress(button) {
    // функция для получения кнопки равенства, на которой произошел клик

    console.log(button);
    console.log(`button value ${button.value}`);
    this.#stack = eval(this.#stackMemo.join("")).toString();
    if (isNaN(this.#stack)) {
      this.#stack = "Результат не определен"
      this.#stackMemo.length = 0;
    } else {
      this.#stackMemo.push(button.value); // к текущему значению прибавляется значение кнопки, на которой произошел клик
      this.#stackHistory.push(this.#stackMemo.join("") + this.#stack);
      
    }
    console.log(`stack ${this.#stack}`);
    console.log(`stack memo ${this.#stackMemo}`);
    console.log(`stack history ${this.#stackHistory}`);

    this.#onResult(this.#stack);
    this.#onMemoValue(this.#stackMemo.join(""));
  }
  // onNegativeButtonPress(button) {

  // }
  
  // onDotButtonPress(button) {

  // }

  onBackspaceButtonPress(button) {
    console.log(button);
    console.log(`button value ${button.value}`);

      if (this.#calc.board.prevButton.type === "equality") {
        this.#stackMemo.length = 0;
      } else {
        
        this.#stack = this.#stack.slice(0, -1);
        this.#stackMemo.pop();
        if (this.#stackMemo.length === 0 && this.#stack.length === 0) {this.#stack = this.#calc.board.digitalButtonList[0].value}
      }

    console.log(`stack ${this.#stack}`);
    console.log(`stack memo ${this.#stackMemo}`);
    this.#onResult(this.#stack);
    this.#onMemoValue(this.#stackMemo.join(""));
  }
}
