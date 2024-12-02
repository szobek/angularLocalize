import { Component } from '@angular/core';
import { AbstractFormWrapper } from '../AbstractFormWrapper';
import { FormWrapperService } from '../form-wrapper-service.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [
    {
      provide: AbstractFormWrapper,
      useClass: FormWrapperService,
    },

  ]
})
export class CardComponent {
  textInCardComponent: string = "card component"
  constructor(private formWrapperService: FormWrapperService) { }

  onClickHandle() {
    this.formWrapperService.call(this)
  }
}
