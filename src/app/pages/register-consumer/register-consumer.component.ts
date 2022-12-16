import { RegisterConsumerService } from './../../services/register-cosumer.service';
import { ConsumerResponse, ConsumerRequest } from './../../interfaces/consumer';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenerateFileComponent } from './generate-file/generate-file.component';

@Component({
  selector: 'app-register-consumer',
  templateUrl: './register-consumer.component.html',
  styleUrls: ['./register-consumer.component.scss'],
})
export class RegisterConsumerComponent implements OnInit {
  @ViewChild(GenerateFileComponent) consumerResponse!: ConsumerResponse;

  constructor(
    private fb: FormBuilder,
    private registerConsumerService: RegisterConsumerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  applicationTypes = ['Confidential', 'Public'];

  registerForm = this.fb.group({
    selectApplicationType: ['', [Validators.required]],
    applicationName: ['', [Validators.required]],
    redirectUrl: ['', [Validators.required]],
    developerEmail: ['', [Validators.required, Validators.email]],
    description: ['', [Validators.required]],
    company: ['', [Validators.required]],
  });

  get selectedApplicationType(): FormControl {
    return this.registerForm.get('selectApplicationType') as FormControl;
  }

  get applicationName(): FormControl {
    return this.registerForm.get('applicationName') as FormControl;
  }

  get developerEmail(): FormControl {
    return this.registerForm.get('developerEmail') as FormControl;
  }

  get description(): FormControl {
    return this.registerForm.get('description') as FormControl;
  }

  get company(): FormControl {
    return this.registerForm.get('company') as FormControl;
  }

  get redirectUrl(): FormControl {
    return this.registerForm.get('redirectUrl') as FormControl;
  }

  changeApplicationType(e: any) {
    this.selectedApplicationType?.setValue(e.target.value, { onlySelf: true });
  }



  onSubmit() {
    const consumer: ConsumerRequest = {
      applicationType: this.selectedApplicationType.value,
      applicationName: this.applicationName.value,
      redirectUrl: this.redirectUrl.value,
      developerEmail: this.developerEmail.value,
      applicationDescription: this.description.value,
      company: this.company.value,
    };

    this.registerConsumerService.addDataToConsumer(consumer);

    this.registerConsumerService
      .createConsumer(consumer);

    this.router.navigate(['generateFile']);
  }
}
