namespace ScientificNotation() {
  toScientificNotation(numb: number, ) {
    let num = numb.toExponential();
    if(num.toString()[num.toString().indexOf("e") + 2] > 6) return num;
    return numb;
  }
}