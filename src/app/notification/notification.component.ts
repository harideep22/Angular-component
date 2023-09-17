import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success blurb " [hidden]="displayNotification">
              <p >This website produces cookies to provide better user experience</p>
              <div><button class="btn close" (click)="closeNotification() ">X</button></div>
            </div>`,
  styles: [".blurb{display: flex; margin:10px 0px; padding: 10px,20px;background-color:#FAD7A0;text-align:center; justify-content:space-between }", ".blurb p{font-size:14px; padding-left:30rem;padding-top:1rem}"]
})
export class NotificationComponent {

  displayNotification: boolean = false;

  closeNotification() {
    this.displayNotification = true;
  }

}
