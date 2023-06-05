function print(text) {
  console.log(text);
}

// function checks if name provided is valid(not empty; no spaces; length > 4; ) returns boolean;
function isValid(name) {
  if (name !== null) {
    return !(name.length < 4 || name.includes(" "));
  } else {
    return false;
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
