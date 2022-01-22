import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: ` <p>input-button-unit works!</p>
    The title is: {{ title }}`,
  styleUrls: ['./input-button-unit.component.scss'],
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello world';

  constructor() {
    this.changeTitle('My first Angular App');
  }

  ngOnInit(): void {}

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}
