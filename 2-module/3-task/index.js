//object that has 3 methods read / summarise / multiply.
let calculator = {
  a: 0,
  b: 0,

  //function gets 2 numbers as parameters and rewrites the properties of the object calculator
  // @ param a,b numbers
  read: function (a, b) {
    this.a = a;
    this.b = b;
  },
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.a * this.b;
  }
};


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
