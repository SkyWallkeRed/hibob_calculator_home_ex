import { Component, Input, OnInit } from '@angular/core';

export enum OperatorEnum {
  add = '+',
  subtract = '-',
  devide = '/',
  multiply = '*',
  equal = '='
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {
  @Input() maxWidth?: string;
  @Input() centerXY?: boolean;

  currentNumber = '0';
  firstOperand = null;
  operator: OperatorEnum = null;
  waitForSecondNumberInput = false;

  showOperatorDisplay = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  operatiorClick(operator: OperatorEnum): void {
    this.showOperatorDisplay = true;

    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber));
      if (this.countDecimals(Number(result)) > 5) {
        this.showOperatorDisplay = false;
      }

      this.currentNumber = String(result);
      this.firstOperand = result;

    }

    this.operator = operator;
    this.waitForSecondNumberInput = true;

  }

  decimalClick(decimal: string): void {

    if (this.waitForSecondNumberInput) {
      this.currentNumber = decimal;
      this.waitForSecondNumberInput = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = decimal : this.currentNumber += decimal;
    }

  }

  dotClick(): void {

    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }

  }

  clearAll(): void {

    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumberInput = false;

  }

  doCalculation(operator: OperatorEnum, secondInput: number): number {

    switch (operator) {
      case OperatorEnum.add:
        return this.firstOperand += secondInput;
      case OperatorEnum.subtract:
        return this.firstOperand -= secondInput;
      case OperatorEnum.multiply:
        return this.firstOperand *= secondInput;
      case OperatorEnum.devide:
        return this.firstOperand /= secondInput;
      case OperatorEnum.equal:
        return secondInput;
    }

  }

  countDecimals(value): number {

    if (Math.floor(value) === value) {
      return 0;
    }
    return value.toString().split('.')[1].length || 0;
  }

}
