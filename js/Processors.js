class Processors {
  // класс для сбора и обработки входящих данных

  #calc; //объявление приватных переменных
  #stack;
  #stackMemo;
  #onResult;
  /**
   *
   * @param {Calc} calc
   * @param {()=>{}} onResult
   */
  constructor(calc, onResult) {
    this.#calc = calc; // приинимаем в аргумент и сохраняем ссылку на Calc, который создал процессор
    this.#stack = "0"; // стек для хранения ТЕКУЩЕГО ЗНАЧЕНИЯ, ПОСЛЕДНЕЙ ОПЕРАЦИИ, ИСТОРИЯ ОПЕРАЦИЙ
    this.#stackMemo = [];
    this.#onResult = onResult;
  }

  onDigitalButtonPress(button) {
    // функция для получения цифровой кнопки, на которой произошел клик

    console.log(button);
    console.log(`button value ${button.value}`);
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
    console.log(`stack ${this.#stack}`);
    console.log(`stack memo ${this.#stackMemo}`);

    this.#onResult(this.#stack);
  }

  onOperationButtonPress(button) {
    // функция для получения операционной кнопки, на которой произошел клик

    console.log(button);
    console.log(`button value ${button.value}`);

    this.#stackMemo.push(button.value); // к текущему значению прибавляется значение кнопки, на которой произошел клик
    console.log(`stack ${this.#stack}`);
    console.log(`stack memo ${this.#stackMemo}`);
    this.#onResult(this.#stack);
  }

  onEqualityButtonPress(button) {
    // функция для получения кнопки равенства, на которой произошел клик

    console.log(button);
    console.log(`button value ${button.value}`);
    this.#stack = eval(this.#stackMemo.join("")).toString();
    this.#stackMemo.push(button.value); // к текущему значению прибавляется значение кнопки, на которой произошел клик
    console.log(`stack ${this.#stack}`);
    console.log(`stack memo ${this.#stackMemo}`);

    this.#onResult(this.#stack);
  }
}
