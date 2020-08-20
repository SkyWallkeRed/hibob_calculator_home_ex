import { Component, Input, OnInit, Output } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { CalculatorService, OperatorEnum } from './calculator.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  @Input() maxWidth?: string;
  @Input() centerXY?: boolean;
  @Input() calculatorNumPadArray?: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  @Output() output: Subject<string> = new Subject<string>();

  currentOperand = '0';
  firstOperand = '0';
  operator: OperatorEnum = null;
  waitForSecondNumberInput = false;
  showOperatorOnScreen = true;

  constructor(private calculatorService: CalculatorService) {
  }

  operatiorClick(operator: OperatorEnum): void {

    if (this.operator && !this.waitForSecondNumberInput) {

      this.showOperatorOnScreen = true;
      let result = this.calculatorService.doCalculation(Number(this.firstOperand), this.operator, Number(this.currentOperand));

      if (!result && result !== 0) {
        result = Number(this.firstOperand);
      }

      if (this.calculatorService.countDecimals(result) > 5) {
        this.showOperatorOnScreen = false;
      }

      this.assignCurrentOperend(result);
    }

    this.operator = operator;
    this.waitForSecondNumberInput = true;

  }

  decimalClick(decimal: string): void {
    console.log(decimal.length);
    if (decimal.length > 10) {
      this.showOperatorOnScreen = false;
    } else {
      this.showOperatorOnScreen = true;
    }

    if (this.waitForSecondNumberInput) {

      this.firstOperand = this.currentOperand;
      this.currentOperand = decimal;
      this.waitForSecondNumberInput = false;

    } else {

      this.currentOperand = this.currentOperand === '0' ? decimal : this.currentOperand + decimal;

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

  assignCurrentOperend(val: number): void {
    this.currentOperand = String(val);
    this.output.next(this.currentOperand);
  }

}
