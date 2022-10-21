import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RegisterConsumerService } from '../register-consumer-service/register-cosumer.service';


import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-generate-file',
  templateUrl: './generate-file.component.html',
  styleUrls: ['./generate-file.component.scss']
})
export class GenerateFileComponent {

  constructor(private registerConsumerService : RegisterConsumerService) { }

  consumer$ = this.registerConsumerService.consumer$;

  @ViewChild('pdfTable') pdfTable!: ElementRef;

  downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    let html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html};
    pdfMake.createPdf(documentDefinition).download('registroCondumidor.pdf');
  }

}
