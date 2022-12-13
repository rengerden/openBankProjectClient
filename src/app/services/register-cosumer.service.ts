import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable  } from "rxjs";
import { Consumer, ConsumerResponse  } from "../register-consumer/consumer";

@Injectable({
    providedIn: 'root'
})
export class RegisterConsumerService {

    constructor( private http: HttpClient) { }

    private consumer = new BehaviorSubject<Consumer>(
        {
           applicationType: '',
            applicationName: '',
            redirectUrl: '',
            developerEmail: '',
            applicationDescription:'',
            company:'',
        }
    );

    private consumerResponse = new BehaviorSubject<ConsumerResponse>({
        consumerId: '',
        applicationType: '',
        applicationName: '',
        redirectUrl: '',
        developerEmail: '',
        applicationDescription: '',
        clientCertificate: '',
        consumerKey: '',
        consumerSecret: '',
        oauth2ClientId: '',
        oatuh2Redirect: '',
        oauth2CllientScope: '',
        oauth2JwsAlg: '',
        oauth2JwsPk: '',
    });

    consumer$ = this.consumer.asObservable();
    consumerResponse$ = this.consumerResponse.asObservable();

    addDataToConsumer(consumer: Consumer) {
        this.consumer.next(consumer);
    }
//.subscribe((resp) => (this.consumerResponse = resp))
    createConsumer(consumer: Consumer) {
         this.http.post<ConsumerResponse>(
            'http://localhost:9098/api/v1/nova/open/banking/consumer', consumer).subscribe
            ((resp)=> (this.consumerResponse.next(resp)));
    }
};
