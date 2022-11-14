import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RegisterConsumerService } from './register-consumer-service/register-cosumer.service';
import { Consumer } from './consumer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-consumer',
  templateUrl: './register-consumer.component.html',
  styleUrls: ['./register-consumer.component.scss']
})
export class RegisterConsumerComponent implements OnInit {

  constructor(private fb: FormBuilder, private registerConsumerService : RegisterConsumerService, private router: Router) { }

  ngOnInit(): void {
  }

  applicationTypes = ['Confidential', 'Public'];

  registerForm = this.fb.group({
    selectApplicationType: ['', [Validators.required]],
    applicationName: ['', [Validators.required]],
    redirectUrl: [''],
    developerEmail: ['', [Validators.required, Validators.email]],
    description: ['', [Validators.required]],
    company: ['', [Validators.required]]
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

  changeApplicationType(e : any) {
    this.selectedApplicationType?.setValue(
      e.target.value, {onlySelf: true}
    );
  }

  onSubmit() {

    const consumer: Consumer = {
      consumerId: '864bd89e-19d0-448e-b2b4-156c72eecb8f',
      applicationType: this.selectedApplicationType.value,
      applicationName: this.applicationName.value,
      redirectUrl: this.registerForm.get('redirectUrl')!.value ? this.registerForm.get('redirectUrl')!.value! : 'No se asignó URL',
      developerEmail: this.developerEmail.value,
      description: this.description.value,
      company: this.company.value,
      clientCertificate: 'None',
      consumerKey: '1xbnf03etvp1bfjaahnurlmoirkpehpsuqe3ntpeqs9',
      consumerSecret: '4moirkpehpsuqe3ntpeqs1xbnf03etvp1bfjaahnurl'
    }

    this.registerConsumerService.addDataToConsumer(consumer);

    this.router.navigate(['generateFile']);

  }

}
