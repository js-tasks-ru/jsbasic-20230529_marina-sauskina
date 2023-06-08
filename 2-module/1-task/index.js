// function summarises salaries as object properties, some other (not number properties) may occur.
// @param salaries - object

function sumSalary(salaries) {
  let result = 0;
  for (let key in salaries) {
    if (typeof (salaries[key]) == "number" && isFinite(salaries[key])) {
      result = result + salaries[key];
    }
  } return result;
}



