import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OperatorEnum } from '../calculator/calculator.component';

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.scss']
})
export class CalculatorButtonComponent{
  @Input() logicVal: string;

  @Input() displayVal?: string;
  @Input() classList?: string;

  @Output() output: EventEmitter<string | OperatorEnum> = new EventEmitter<string | OperatorEnum>();

  constructor() {
  }

}
