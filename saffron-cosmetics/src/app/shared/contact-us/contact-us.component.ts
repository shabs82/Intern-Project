import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm = new FormGroup({
  fullName : new FormControl(),
  mobileNumber : new FormControl(),
  email : new FormControl(),
  writeMessage : new FormControl()
  })
  //protected aFormGroup: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
  siteKey:string = "6LfCHGEcAAAAAL9ITK6V205-RsxZGDdhm6ngLxhl";

  send(){
  const contactForm = this.contactForm.value;
  this.contactForm.reset();
  this.router.navigateByUrl("/contact-us");

  }
}
