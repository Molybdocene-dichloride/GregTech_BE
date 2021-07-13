namespace ScientificNotation {
  toScientificNotation(numb: number, count: number) {
    let num = numb.toExponential();
    if(num.toString()[num.toString().indexOf("e") + 2] > count) return num;
    return numb;
  }
}