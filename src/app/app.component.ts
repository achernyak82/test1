import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {
  title = 'app';
  public path = '';

  constructor() { }

  ngOnInit() {
    this.path = 'T'; // значение по умолчанию в сетапе
  }

  onclick1() {
   this.path = 'T';
  }

  onclick2() {
    this.path = 'I';
  }

  onclick3() {
    this.path = 'A';
  }
}
