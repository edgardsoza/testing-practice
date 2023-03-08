const stringLength = require('./index');

function reverseString(string2) {
  return string2.split("").reverse().join("") ;
}

class calculator{
  constructor(number1, number2) {
      this.number1 = number1;
      this.number2 = number2;
  }
  
  get add() {
      return this.number1 + this.number2;
  }
  
  get subtract() {
      return this.number1 - this.number2;
  }
  
  get divide() {
      return this.number1/this.number2;
  }
  
  get multiply() {
      return this.number1 * this.number2;
  }
}

it('Check string length', () => 
  expect(stringLength('Hola')).toBe(4),
  expect(stringLength('Perro')).toBe(5))

 it('Check string reverse', () => 
 expect(reverseString('hola')).toBe('aloh'),
 expect(reverseString('perro')).toBe('orrep'))

 describe('calculator test', () => {
  test('add function', () => {
    expect(new calculator(5,5).add).toBe(10),
    expect(new calculator(10,5).add).toBe(15),
    expect(new calculator(20,5).add).toBe(25)
  })

  test('substract function', () => {
    expect(new calculator(5,5).subtract).toBe(0);
    expect(new calculator(10,5).subtract).toBe(5),
    expect(new calculator(20,5).subtract).toBe(15)
  })

  test('divide function', () => {
    expect(new calculator(5,5).divide).toBe(1),
    expect(new calculator(10,5).divide).toBe(2),
    expect(new calculator(20,5).divide).toBe(4)
  })

  test('multiply function', () => {
    expect(new calculator(5,5).multiply).toBe(25),
    expect(new calculator(10,5).multiply).toBe(50),
    expect(new calculator(20,5).multiply).toBe(100)
  })
 })

 function capitalize(string3) {
  return string3.charAt(0).toUpperCase() + string3.slice(1);
 }

 it('check if capitalize works well', () =>
  expect(capitalize('hola')).toBe('Hola'))
