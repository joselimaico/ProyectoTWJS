import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  hide=true
  signinForm = this.fb.group({
    username:['',Validators.compose([Validators.required])],
    email: ['',Validators.compose([Validators.required,Validators.email])],
    password: ['',Validators.compose([Validators.required,Validators.minLength(8)])]
  });
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  getNameErrorMessage() {
    return this.signinForm.get('username').hasError('required') ? 'Nombre de usuario requerido' :
        '';
  }

  getPasswordErrorMessage(){
    return this.signinForm.get('password').hasError('required')? 'password requerido' :
      this.signinForm.get('password').hasError('minlength')? 'mínimo 8 caracteres' :
        '';
  }
  getEmailErrorMessage() {
    return this.signinForm.get('email').hasError('required') ? 'email requerido' :
      this.signinForm.get('username').hasError('email') ? 'email inválido' :
        '';
  }

}
