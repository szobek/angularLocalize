import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  msg:string=""
  constructor() {
  this.msg=$localize`:@@custom2:&lt;span i18n="custom2" class="cssOsztaly" &gt;other&lt;/span&gt;`
  }
}
