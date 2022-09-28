import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-consent',
  templateUrl: './list-consent.component.html',
  styleUrls: ['./list-consent.component.scss']
})
export class ListConsentComponent implements OnInit {

  apiStandard :string = 'UKOpenBanking';//BerlinGroup  UKOpenBanking

  user = {
    username: 'silverdrao',
    email: 'prueba@prueba.com'
  }


  consentId = '';
  consentStatus = '';
  frequencyPerDay = '';
  recurringIndicator = '';
  validUntil = '';



  zson = '{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}';
  account = {
    AccountId: ''
  }

  getDataAccount(type: string){
    const AccountId = this.account.AccountId;

  }


  constructor() { }

  ngOnInit(): void {
  }

}
