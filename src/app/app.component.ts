import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <app-input-button-unit></app-input-button-unit>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My Todos';
}
