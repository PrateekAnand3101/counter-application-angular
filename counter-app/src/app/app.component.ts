import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter-app';

  count: number = 0;

  handleIncrement() {
    if (this.count >= 0) {
      this.count += 1;
    }

  }

  handleDecrement() {
    if (this.count > 0) {
      this.count -= 1;

    }
  }


  handleReset() {
    this.count = 0;
  }




}
