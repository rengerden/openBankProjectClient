import { RegisterUserService } from './../../services/register-user.service';
import { UserRequest } from './../../interfaces/user';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private registerUserService: RegisterUserService) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      termsAndConditions: [false, Validators.requiredTrue],
      privacyPolicy: [false, Validators.requiredTrue],
    })
  }

  get firstName(): FormControl {
    return this.form.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.form.get('lastName') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.form.get('confirmPassword') as FormControl;
  }

  get termsAndConditions(): FormControl {
    return this.form.get('termsAndConditions') as FormControl;
  }

  get privacyPolicy(): FormControl {
    return this.form.get('privacyPolicy') as FormControl;
  }

  onSubmit(): void {
    const user: UserRequest = {
      firstname: this.firstName.value,
      lastname: this.lastName.value,
      email: this.email.value,
      username: this.username.value,
      password: this.password.value,
      passwordConfirm: this.confirmPassword.value,
      termsAndConditions: this.termsAndConditions.value,
      agreement: this.privacyPolicy.value
    }

    this.registerUserService.addDataToUser(user);
    this.registerUserService.createUser(user);
    this.router.navigateByUrl('/')
  }
}
