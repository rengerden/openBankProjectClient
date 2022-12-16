import { Component, Input } from '@angular/core';
import { ConsumerResponse } from './../../../interfaces/consumer';
import { RegisterConsumerService } from './../../../services/register-cosumer.service';

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
