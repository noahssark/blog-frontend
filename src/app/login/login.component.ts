import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if(!this.loginForm.invalid) {
      console.log(this.loginForm.controls.user.value);
      console.log(this.loginForm.controls.password.value);
    }
  }

  hasError(input:string):boolean {
    return this.loginForm.get(input).hasError('required') && this.loginForm.get(input).touched;
  }
}
