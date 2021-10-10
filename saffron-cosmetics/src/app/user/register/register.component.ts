import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 form : FormGroup |undefined;
  constructor(private  formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      firstName: '',
      lastName:'',
      email:'',
      password:'',
    })
  }

  submit() : void{

  }
}
