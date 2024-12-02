import { Injectable } from '@angular/core';
import { AbstractFormWrapper } from './AbstractFormWrapper';
import { BaseForm } from './baseForm';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormWrapperService implements AbstractFormWrapper {
  private _anotherBaseForm: BaseForm;
  testText: string="Baseform constructor run";
  testText2: string="";
  constructor(private http: HttpClient) {
    this._anotherBaseForm = new BaseForm(this.http, this.testText);

  }
  call(caller:any){
    this._anotherBaseForm.write(caller)
  }
}
