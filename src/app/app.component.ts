import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <app-input-button-unit></app-input-button-unit>
    <li *ngFor="let todoItem of todoList">
      <app-todo-item [item]="todoItem"></app-todo-item>
    </li>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My Todos';
  todoList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];
}
