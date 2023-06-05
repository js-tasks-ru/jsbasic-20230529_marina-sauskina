// function changes the length of the string and instead of redundant characters "…" will be used
// @param str - the line or text
// @param maxlength - the allowed length of the line
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  } else {
    return str;
  }

}
