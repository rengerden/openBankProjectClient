import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-consumer',
  templateUrl: './register-consumer.component.html',
  styleUrls: ['./register-consumer.component.scss']
})
export class RegisterConsumerComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

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

  changeApplicationType(e : any) {
    this.selectedApplicationType?.setValue(
      e.target.value, {onlySelf: true}
    );
  }

  onSubmit() {
    console.log('Testing onSubmit');
    this.registerForm.dirty;
    console.log(this.registerForm);
  }

}
