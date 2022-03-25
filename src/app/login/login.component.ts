import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any = '';
  password: any = '';
  loginValid: boolean = false;
  isError: boolean = false;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) : void {
   if(form.value.password === 'fingent' && form.value.username === 'fingent' ){
    this.route.navigate(['/home']);
   }else{
     this.isError = true;
   }
  }
}
