import { Component, Input } from '@angular/core';
import { cardDatas } from '../options';
import { Router, RoutesRecognized } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
constructor(private router: Router){this.getCodeFromUrl()}
getCodeFromUrl() {
  this.router.events.subscribe(val => {
const code=false
    if (val instanceof RoutesRecognized) {
      const param = val.url
      const code = param.split("&")[1].split("=")[1]
      console.log(code); 
      console.log("code"); 
      
    }else{
      console.log("/////////////////////////////");

    }
  })
}
}
