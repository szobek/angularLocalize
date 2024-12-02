import { HttpClient } from '@angular/common/http';

export class BaseForm {

  constructor(
    public http: HttpClient,
    public log: string
  ) {
    console.log(log);
    
  }
  write(callerClass:any){

    console.log(callerClass);
    
  }
}