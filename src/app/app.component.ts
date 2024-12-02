import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { retry, skip } from 'rxjs';
import { filter } from 'rxjs';
import { CallService } from './services/call.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
webPageParamSubscribe:number=1
  constructor(
    private _router: ActivatedRoute,
    private callService: CallService
  ) {

  }

  ngOnInit() {
    // this.callService.checkParamsInUrl(this._router)
    // setTimeout(()=>{this.callService.testMethod()},12000)
    // setTimeout(()=>{this.callService.testMethod()},22000)
    // setTimeout(()=>{this.callService.testMethod3()},2*60*1000)
    // setTimeout(()=>{this.callService.testMethod2()},31*60*1000)
  }

}
