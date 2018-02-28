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
    this.temp = number;
    return this; 
  }

  pow(number) {
    
    this.str = this.str + "**" + number;
    this.temp = number;
    return this; 
  }
}
module.exports = SmartCalculator;