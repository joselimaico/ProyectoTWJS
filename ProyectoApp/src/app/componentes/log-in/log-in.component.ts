import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AlertService, AuthenticationService} from "../../_services";
import {Usuario} from "../../_models/Clases/Usuario";
import {InternalService} from "../../Servicios/internal.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email:string;
  password:string;



  hide = true;
  loginForm:FormGroup;




  constructor(private fb: FormBuilder,
              private _router:Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['',Validators.compose([Validators.required,
         Validators.email
        ])],
      password: ['',Validators.compose([Validators.required,Validators.minLength(8)])]
    });
  }

  getErrorMessage() {
    return this.loginForm.get('email').hasError('required') ? 'email requerido' :
       this.loginForm.get('email').hasError('email') ? 'email inválido' :
        '';
  }

  getPasswordErrorMessage(){
    return this.loginForm.get('password').hasError('required')? 'password requerido' :
      this.loginForm.get('password').hasError('minlength')? 'mínimo 8 caracteres' :
        '';
  }

   get f() { return this.loginForm.controls; }

  onSubmit() {
     this.authenticationService.login(this.f.email.value,this.f.password.value)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token',`${res.token}`)
          console.log('Dentro del subscribe el localstorage tiene algo??',localStorage.hasOwnProperty('token'));
          console.log('dentro del subscribe el token es: ',localStorage.getItem('token'));
          this._router.navigate(['/PaginaPrincipal'])
        },
        err => console.log(err)
      )
  }

  irASignIn(){
    const url = ['/signin'];
    this._router.navigate(url);

  }



}
