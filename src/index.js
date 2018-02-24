class SmartCalculator {
  constructor(initialValue) {
    this.str = initialValue.toString();
    this.temp =initialValue;
  }
  toString(){
    return eval(this.str);
  }

  add(number) {
    this.str = this.str + "+" + number;
    this.temp = number;
    return this; 
  }
  
  subtract(number) {
    this.str = this.str + "-" + number;
    this.temp = number;
    return this; 
  }

  multiply(number) {
    this.str = this.str + "*" + number;
    this.temp = number;
    return this; 
  }

  devide(number) {
    this.str = this.str + "/" + number;
    this.temp = namber;
    return this; 
  }

  pow(number) {
    for(var i=0; i< number-1;i++){
      this.str = this.str + "*" + this.temp;
    }
    this.temp = number;
    return this; 
  }
}
module.exports = SmartCalculator;