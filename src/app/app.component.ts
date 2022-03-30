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
  selectedMenu = '1';
  options: any;
  constructor(fb: FormBuilder, public router : Router) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0,
    });
  }
  selectMenu(p:any): any {
    this.selectedMenu = p;
    if(this.selectedMenu == '1'){
      this.router.navigate(['/home']);
    }else if(this.selectedMenu == '2'){
      this.router.navigate(['/country']);
    }else if (this.selectedMenu === '3'){
      this.router.navigate(['/']);
    }
  }
}
