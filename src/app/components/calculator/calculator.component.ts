import { Component, Input, OnInit, Output } from '@angular/core';
import { ReplaySubject } from 'rxjs';

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

  @Output() output: ReplaySubject<string> = new ReplaySubject<string>(1);

  currentOperand = '0';
  firstOperand = '0';
  operator: OperatorEnum = null;
  waitForSecondNumberInput = false;
  showOperatorOnScreen = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  operatiorClick(operator: OperatorEnum): void {

    if (this.operator && !this.waitForSecondNumberInput) {

      this.showOperatorOnScreen = true;
      let result = this.doCalculation(Number(this.firstOperand), this.operator, Number(this.currentOperand));

      if (!result) {
        result = Number(this.firstOperand);
      }

      if (this.countDecimals(result) > 5) {
        this.showOperatorOnScreen = false;
      }

      this.assignCurrentOperend(result);
    }

    this.operator = operator;
    this.waitForSecondNumberInput = true;

  }

  decimalClick(decimal: string): void {

    if (this.waitForSecondNumberInput) {

      this.firstOperand = this.currentOperand;
      this.currentOperand = decimal;
      this.waitForSecondNumberInput = false;

    } else {

      this.currentOperand === '0' ? this.currentOperand = decimal : this.currentOperand += decimal;

    }

  }

  dotClick(): void {

    if (!this.currentOperand.includes('.')) {
      this.currentOperand += '.';
    }

  }

  clearAll(): void {

    this.currentOperand = '0';
    this.firstOperand = '0';
    this.operator = null;
    this.waitForSecondNumberInput = false;
    this.showOperatorOnScreen = true;
  }

  doCalculation(firstInput: number, operator: OperatorEnum, secondInput: number): number {

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

  assignCurrentOperend(val: number): void {
    this.currentOperand = String(val);
    this.output.next(this.currentOperand);
  }

  countDecimals(val: number): number {
    if (Math.floor(val.valueOf()) === val.valueOf()) {
      return 0;
    }
    return val.toString().split('.')[1].length || 0;
  }

}
