function ucFirst(str) {
  // function changes first character to Uppercase.
  if (str === '') {
    return '';
  }
  else {
    if (str.length === 1) {
      return str[0].toUpperCase();
    } else {
      return str[0].toUpperCase() + str.slice(1);
    }
  }
}
