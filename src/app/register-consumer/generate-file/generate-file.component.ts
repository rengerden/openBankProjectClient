import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RegisterConsumerService } from '../../services/register-cosumer.service';


import { ConsumerResponse } from '../consumer';

@Component({
  selector: 'app-generate-file',
  templateUrl: './generate-file.component.html',
  styleUrls: ['./generate-file.component.scss']
})
export class GenerateFileComponent {

  @Input() consumerResponse!: ConsumerResponse;

  constructor(private registerConsumerService : RegisterConsumerService) { }

  consumerResponse$ = this.registerConsumerService.consumerResponse$;

}
