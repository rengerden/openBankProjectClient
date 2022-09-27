import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})
export class ConsentComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  banks = ['City', 'HSBC' ,'Banamex'];
  permissions = [
    {name: 'ReadAccountsMexicoGroup', value: 'readAccountsMexicoGroup'},
    {name: 'ReadBalancesMexicoGroup', value: 'readBalancesMexicoGroup'},
    {name: 'ReadTransactionsMexicoGroup', value: 'readTransactionsMexicoGroup'},
  ];

  consentForm = this.fb.group({
    selectBank: ['', [Validators.required]],
    permissions: this.fb.array([]),
    frequencyPerDay: ['', [Validators.required]],
    expirationDateTime: ['', [Validators.required]],
    recurringIndicator: [false],
  });

  get selectedBank() {
    return this.consentForm.get('selectBank');
  }

  changeBank(e : any) {
    this.selectedBank?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  onSubmit() {}

}
