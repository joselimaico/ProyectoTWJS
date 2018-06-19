import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  hide = true;
  loginForm = this.fb.group({
    username: ['',Validators.compose([Validators.required,Validators.email])],
    password: ['',Validators.compose([Validators.required,Validators.minLength(8)])]
  });

  constructor(private fb: FormBuilder, private _router:Router) { }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.loginForm.get('username').hasError('required') ? 'email requerido' :
      this.loginForm.get('username').hasError('email') ? 'email inválido' :
        '';
  }

  getPasswordErrorMessage(){
    return this.loginForm.get('password').hasError('required')? 'password requerido' :
      this.loginForm.get('password').hasError('minlength')? 'mínimo 8 caracteres' :
        '';
  }

  onSubmit() {
    const email = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    console.log(email,password);

  }
  irASignIn(){
    const url = ['/signin'];
    this._router.navigate(url);

  }


}
