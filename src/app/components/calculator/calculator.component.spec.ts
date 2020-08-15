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

  it(`shuld add with calc func add(+) operator`, () => {
    const result = component.doCalculation(1, OperatorEnum.add, 2);
    expect(result).toBe(3);
  });

  it(`shuld add with calc func devide(/) operator`, () => {
    const result = component.doCalculation(22, OperatorEnum.devide, 2);
    expect(result).toBe(11);
  });

  it(`shuld add with calc func multiply(*) operator`, () => {
    const result = component.doCalculation(22, OperatorEnum.multiply, 3);
    expect(result).toBe(66);
  });

  it(`shuld add with calc func subtract(-) operator`, () => {
    const result = component.doCalculation(22, OperatorEnum.subtract, 2);
    expect(result).toBe(20);
  });

  it(`shuld add with calc func subtract(-) operator negative result`, () => {
    const result = component.doCalculation(2, OperatorEnum.subtract, 22);
    expect(result).toBe(-20);
  });

  it(`shuld reset calculator uning AC func`, () => {
    component.decimalClick('5');
    component.operatiorClick(OperatorEnum.multiply);
    component.decimalClick('3');
    component.operatiorClick(OperatorEnum.equal);
    component.clearAll();
    expect(
      component.currentOperand === '0' &&
      component.firstOperand === '0' &&
      component.operator === null &&
      component.waitForSecondNumberInput === false).toBeTrue();
  });

  it(`shuld test calculator flow`, () => {
    component.decimalClick('100');
    component.operatiorClick(OperatorEnum.add);
    component.decimalClick('40');
    component.operatiorClick(OperatorEnum.equal);
    expect(component.currentOperand).toBe('140');
  });
});
