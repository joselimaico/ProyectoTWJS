import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AlertService, AuthenticationService} from "../../_services";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  hide = true;

  submitted = false;
  returnUrl: string;
  loginForm:FormGroup;
  email:string;
  password:string;



  constructor(private fb: FormBuilder,
              private _router:Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['',Validators.compose([Validators.required,
         Validators.email
        ])],
      password: ['',Validators.compose([Validators.required,Validators.minLength(8)])]
    });
    // this.authenticationService.logout();

    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'main';

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
    //this.submitted = true;
    // this.email=this.loginForm.get('email').value;
    // this.password=this.loginForm.get('password').value;

    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //   return;
    // }

    // this.loading = true;
    // this.authenticationService.login(this.f.username.value, this.f.password.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     });
    // if(this.loginForm.get('username').value==='jose'&&this.loginForm.get('password').value==='12345678'){
    //   this.authenticationService.login(this.loginForm.get('username').value,this.loginForm.get('password').value)
    //   this.router.navigate(['/main']);
    // }
    //console.log(this.loginUserData)
     this.authenticationService.login(this.f.email.value,this.f.password.value)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token',res.token)
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
