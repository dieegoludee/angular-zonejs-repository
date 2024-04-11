import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title: string = 'bases-app-angular';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
    if (this.counter < 0) {
      this.counter = 0;
    }
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
