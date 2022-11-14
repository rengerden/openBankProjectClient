import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Consumer } from "../consumer";

@Injectable({
    providedIn: 'root'
})
export class RegisterConsumerService {
    private consumer = new BehaviorSubject<Consumer>(
        {
            consumerId: '',
            applicationType: '',
            applicationName: '',
            redirectUrl: '',
            developerEmail: '',
            description:'',
            company:'',
            clientCertificate: '',
            consumerKey: '',
            consumerSecret: ''
        }
    );

    consumer$ = this.consumer.asObservable();

    addDataToConsumer(consumer: Consumer) {
        this.consumer.next(consumer);
    }
};