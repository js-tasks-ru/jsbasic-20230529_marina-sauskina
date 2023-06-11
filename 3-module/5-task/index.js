// function finds min and max value in a string
//@param string
function getMinMax(str) {
  const newArray = str.split(' ').filter(number => !isNaN(number)).map((number) => parseFloat(number));

  return {
    min: Math.min(...newArray),
    max: Math.max(...newArray)
  };
}


