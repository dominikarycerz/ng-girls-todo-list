import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  template: `
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
    <li *ngFor="let todoItem of todoList">
      <app-todo-item [item]="todoItem"></app-todo-item>
    </li>
  `,
  styleUrls: ['./list-manager.component.scss'],
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[] = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];

  constructor() {}

  ngOnInit(): void {}

  addItem(title: string) {
    this.todoList.push({ title });
  }
}