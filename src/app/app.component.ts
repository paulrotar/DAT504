import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [
      trigger('myAnimation', [
          state('small', style ({
              transform: 'scale(1)',
          })),
          state('large', style({
              transform: 'scale(2)',
          })),
          transition('small => large', animate('300ms ease-in')),
      ])
  ]
})
export class AppComponent {
  state: string = 'small'
  animateThis() {
      this.state = (this.state === 'small' ? 'large' : 'small');
  }
}

    