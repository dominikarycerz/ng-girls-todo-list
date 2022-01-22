import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input
      [value]="title"
      (click)="clearInput()"
      (keyup.enter)="changeTitle($event.target.value)"
    />
    <button (click)="changeTitle('Button Clicked!')">Save</button>
    <h2>{{ title }}</h2>
  `,
  styleUrls: ['./input-button-unit.component.scss'],
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello world';

  constructor() {}

  ngOnInit(): void {}

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }

  clearInput() {
    this.title = '';
  }
}
