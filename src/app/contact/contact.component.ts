import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    subject: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor( private formBuilder : FormBuilder) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Form submitted !', this.contactForm.value);
    this.contactForm.reset();
  }

}
