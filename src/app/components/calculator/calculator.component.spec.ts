import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent, OperatorEnum } from './calculator.component';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculatorComponent,
        CalculatorButtonComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should create calculator-btn-component`, () => {
    const button = TestBed.createComponent(CalculatorButtonComponent);
    const btn = button.componentInstance;
    expect(btn).toBeTruthy();
  });

  it(`shuld test calc func add(+) operator`, () => {
    component.currentNumber = '1';
    component.waitForSecondNumberInput = false;
    component.firstOperand = 1;
    const result = component.doCalculation(OperatorEnum.add, 2);
    console.log(result);
    expect(result).toBe(3);
  });

  it(`shuld test calc func devide(/) operator`, () => {

    component.currentNumber = '1';
    component.waitForSecondNumberInput = false;
    component.firstOperand = 22;
    const result = component.doCalculation(OperatorEnum.devide, 2);
    console.log(result);
    expect(result).toBe(11);
  });

  it(`shuld test calc func multiply(*) operator`, () => {

    component.currentNumber = '1';
    component.waitForSecondNumberInput = false;
    component.firstOperand = 22;
    const result = component.doCalculation(OperatorEnum.multiply, 3);
    console.log(result);
    expect(result).toBe(66);
  });

  it(`shuld test calc func subtract(-) operator`, () => {
    component.currentNumber = '1';
    component.waitForSecondNumberInput = false;
    component.firstOperand = 22;
    const result = component.doCalculation(OperatorEnum.reduce, 2);
    console.log(result);
    expect(result).toBe(20);
  });

  it(`shuld test clear all func AC`, () => {
    component.currentNumber = '1';
    component.waitForSecondNumberInput = false;
    component.firstOperand = 22;
    component.decimalClick('5');
    component.operatiorClick(OperatorEnum.multiply);
    component.decimalClick('3');
    component.operatiorClick(OperatorEnum.equal);
    component.clearAll();
    expect(
      component.currentNumber === '0' &&
      component.firstOperand === null &&
      component.operator === null &&
      component.waitForSecondNumberInput === false).toBeTrue();
  });

  it(`shuld test calculation flow`, () => {
    component.decimalClick('100');
    component.operatiorClick(OperatorEnum.add);
    component.decimalClick('40');
    component.operatiorClick(OperatorEnum.equal);
    expect(component.currentNumber).toBe('140');
  });
});
