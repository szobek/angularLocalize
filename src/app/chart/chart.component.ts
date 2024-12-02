import { Component } from '@angular/core';
import { FormWrapperService } from '../form-wrapper-service.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  textInChartComponent:string="chart component"
  constructor(private formWrapperService: FormWrapperService) {}

  onClickHandle(){
    this.formWrapperService.call(this)
  }
}
