import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// This import is required for ngModel
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule       // Add explicite import for this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
