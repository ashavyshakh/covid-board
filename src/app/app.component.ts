import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covidboard';
  options: any;
  constructor(fb: FormBuilder, public router : Router) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0,
    });
  }
}
