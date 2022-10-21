import { Component, OnInit } from '@angular/core';
import { Consumer } from '../consumer';
import { RegisterConsumerService } from '../register-consumer-service/register-cosumer.service';

@Component({
  selector: 'app-generate-file',
  templateUrl: './generate-file.component.html',
  styleUrls: ['./generate-file.component.scss']
})
export class GenerateFileComponent implements OnInit {

  constructor(private registerConsumerService : RegisterConsumerService) { }

  consumer$ = this.registerConsumerService.consumer$;

  ngOnInit(): void {
  }

}
