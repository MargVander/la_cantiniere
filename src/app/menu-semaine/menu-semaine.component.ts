import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu-semaine',
  templateUrl: './menu-semaine.component.html',
  styleUrls: ['./menu-semaine.component.css']
})
export class MenuSemaineComponent implements OnInit {

  closeResult: string;
  quantitePlat: number = 1;
  modalOptions:NgbModalOptions;

    menuForm = this.formBuilder.group({
    choixPlat: ['', Validators.required],
    platFormuleChoix: ['', Validators.required],
    quantiteRepas: [  '', Validators.required]
    });

  constructor( private modalService: NgbModal, private formBuilder : FormBuilder) {
    
      this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
      size: 'lg'
    }
   }

  openLg(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => { //ouvre une fenetre modal
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

  onSubmit() {
    console.log('Form submitted !', this.menuForm.value);
    this.menuForm.reset();
  }

  ngOnInit() {
  }

}
