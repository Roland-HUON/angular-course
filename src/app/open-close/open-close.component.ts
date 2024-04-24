import { Component } from '@angular/core';
import { state, transition, style, animate, trigger } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        }),
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
        }),
      ),
      transition(
        'open=>closed',
        animate('0.2s 0.1s ease-in-out')
      ),
      transition(
        'closed => open', 
        [animate('0.5s')]
      ),
    ])
]
})
export class OpenCloseComponent {
  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
