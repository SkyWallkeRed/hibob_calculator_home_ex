import { Injectable } from '@angular/core';

export enum OperatorEnum {
  add = '+',
  subtract = '-',
  devide = '/',
  multiply = '*',
  equal = '='
}

@Injectable()
export class CalculatorService {

  constructor() {
  }


  doCalculation(firstInput: number, operator: OperatorEnum, secondInput: number): number {
    console.log(operator);
    switch (operator) {
      case OperatorEnum.add:
        return firstInput + secondInput;
      case OperatorEnum.devide:
        return firstInput / secondInput;
      case OperatorEnum.multiply:
        return firstInput * secondInput;
      case OperatorEnum.subtract:
        return firstInput - secondInput;
      case OperatorEnum.equal:
        break;
    }
  }

  countDecimals(val: number): number {
    if (Math.floor(val.valueOf()) === val.valueOf()) {
      return 0;
    }
    return val.toString().split('.')[1].length || 0;
  }
}
