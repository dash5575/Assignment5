import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
    Marvellous : inline html and css 
  </h1>
  Enter institute name: <input type="text">
  </div>`,
  styles: [`h1
  {
  color:blue;
  }`]
})
export class AppComponent {
  title = 'app';
}
