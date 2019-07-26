import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// This import is required for ngModel
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondcompComponent } from './secondcomp/secondcomp.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondcompComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule  //add explicite import this for
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
