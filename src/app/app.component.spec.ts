import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CalculatorButtonComponent } from './components/calculator-button/calculator-button.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { By } from 'protractor';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        CalculatorButtonComponent,
        CalculatorComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hibob-calc-home-ex'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hibob-calc-home-ex');
  });

  it(`should create component app-calculator`, () => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const calcComponent = fixture.componentInstance;
    expect(calcComponent).toBeTruthy();
  });
});
