import { environment } from './../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable  } from "rxjs";
import { ConsumerRequest, ConsumerResponse  } from "../interfaces/consumer";

@Injectable({
    providedIn: 'root'
})
export class RegisterConsumerService {

    private baseUrl: string = environment.consumerApiUrl;

    constructor( private http: HttpClient) { }

    private consumer = new BehaviorSubject<ConsumerRequest>(
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

    addDataToConsumer(consumer: ConsumerRequest) {
        this.consumer.next(consumer);
    }
//.subscribe((resp) => (this.consumerResponse = resp))
    createConsumer(consumer: ConsumerRequest) {
         this.http.post<ConsumerResponse>(
            this.baseUrl, consumer).subscribe
            ((resp)=> (this.consumerResponse.next(resp)));
    }
};
