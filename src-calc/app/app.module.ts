import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// This import is required for ngModel
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    CalculatorComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule  //add explicite import this for
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
