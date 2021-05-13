class Processors {
  // класс для сбора и обработки входящих данных

  #calc; //объявление приватных переменных
  #stack;
  #onResult;
  /**
   *
   * @param {Calc} calc
   * @param {()=>{}} onResult
   */
  constructor(calc, onResult) {
    this.#calc = calc; // приинимаем в аргумент и сохраняем ссылку на Calc, который создал процессор
    this.#stack = [0, "", []]; // стек для хранения ТЕКУЩЕГО ЗНАЧЕНИЯ, ПОСЛЕДНЕЙ ОПЕРАЦИИ, ИСТОРИЯ ОПЕРАЦИЙ
    this.#onResult = onResult;
  }

  onDigitalButtonPress(button) {
    // функция для получения цифровой кнопки, на которой произошел клик

    console.log(button);
    console.log(button.value);
    if (this.#stack[1].length > 0) {
      // условие проверяет, если при нажатии на цифровую кнопку в последних операциях, что-то есть,
      this.#stack[0] = button.value.toString(); // тогда текущее значение принимает значение нажато цифровой кнопки и переобразуется в стринг
      this.#stack[1] = ""; //последние операции очищаются
    } else {
      this.#stack[0] = (this.#stack[0] + button.value).toString(); // в противном случае, к текущему значению добавляется значение цифровой кнопки и переобразуется в стринг
    }

    console.log(this.#stack);
  }

  onOperationButtonPress(button) {
    // функция для получения операционной кнопки, на которой произошел клик

    console.log(button);
    console.log(button.value);
    this.#stack[0] = this.#stack[0] + button.value; // к текущему значению прибавляется значение кнопки, на которой произошел клик
    this.#stack[1] = ""; // последние операции очищаются, чтобы корректно срабатывала проверка в предыдущей функции
    console.log(this.#stack);
  }

  onEqualityButtonPress(button) {
    // функция для получения кнопки равенства, на которой произошел клик

    console.log(button);
    console.log(button.value);
    console.log(eval(this.#stack[0]));
    this.#stack[1] = (
      this.#stack[0] +
      button.value +
      eval(this.#stack[0])
    ).toString(); // в последнюю оперцию записываем все уравнение и результат
    this.#stack[2].push(this.#stack[1]); // из последеней операции отправляем в историю операций
    this.#stack[0] = eval(this.#stack[0]); // текущее значение принимает результат вычеслений
    console.log(this.#stack);
    this.#onResult(this.#stack[0]);
  }
}
