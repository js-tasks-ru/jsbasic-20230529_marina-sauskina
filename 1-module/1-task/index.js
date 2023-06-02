function factorial( n ) {
  // function that counts factorial of a number given(n)
  if (n == 0 || n == 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = n; i > 0; i--) {
      result = result * i;
    }
    return result;
  }
}
