import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../_services";
import {Router} from "@angular/router";
import {InternalService} from "../../Servicios/internal.service";
import {Usuario} from "../../_models/Clases/Usuario";

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
  constructor(private fb:FormBuilder,
              private authService:AuthenticationService,
              private _router:Router,
              private _internalService:InternalService) { }

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
      this.signinForm.get('email').hasError('email') ? 'email inválido' :
        '';
  }
  get f() { return this.signinForm.controls; }
  onSubmit(){
    this.authService.signin(this.f.username.value,this.f.email.value,this.f.password.value)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token',res.token) //AQUI GUARDA EL TOKEN
          this._router.navigate(['/PaginaPrincipal'])
        },
        err => console.log(err)
      )
  }

}
