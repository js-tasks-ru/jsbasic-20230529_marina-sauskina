// function returns camelcase instead of '-'
//@param str - string
function camelize(str) {
  if (str === '') {
    return '';
  } else {
    if (str.startsWith('-')) {
      str = str.slice(1);
      let newLine = str.split('-');
      newLine = newLine.map(word => word[word.indexOf(',') + 1].toUpperCase() + word.slice(1));
      return str = newLine.join('');
    } else {
      let newLine = str.split('-');
      newLine = newLine.map(word => word[word.indexOf(',') + 1].toUpperCase() + word.slice(1));
      str = newLine.join('');
      return str[0].toLowerCase() + str.slice(1);
    }

  }

}
