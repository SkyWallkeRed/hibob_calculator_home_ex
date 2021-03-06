import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorButtonComponent } from './components/calculator-button/calculator-button.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculatorService } from './components/calculator/calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorButtonComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
