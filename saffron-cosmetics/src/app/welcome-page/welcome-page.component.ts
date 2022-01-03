import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {



  constructor() {
  }

  ngOnInit(): void {

      window.alert(" Enjoy exclusive 10% discount.Minimum spend £10. Use code 10 off 10");
    }




}
