import { Component, Input, OnInit } from '@angular/core';

export enum OperatorEnum {
  add = '+',
  reduce = '-',
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

  constructor() {
  }

  ngOnInit(): void {
  }

  operatiorClick(operator: OperatorEnum): void {

    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber));
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
      case OperatorEnum.reduce:
        return this.firstOperand -= secondInput;
      case OperatorEnum.multiply:
        return this.firstOperand *= secondInput;
      case OperatorEnum.devide:
        return this.firstOperand /= secondInput;
      case OperatorEnum.equal:
        return secondInput;
    }
  }
}
