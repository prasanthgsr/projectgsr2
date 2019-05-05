import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  todo:Todo[];
  loginForm : FormGroup;
  submitted :boolean = false;
  invalidLogin :boolean=false;
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  onSubmit()
  {
    this.submitted=true;
    //if validation findLocaleData, it should then return to validate again
    if(this.loginForm.invalid)
    return;
  let username=this.loginForm.controls.email.value;
  let password = this.loginForm.controls.password.value;
  if(this.loginForm.controls.email.value=="deba@gmail.com" && 
      this.loginForm.controls.password.value=="123456")
      {
        localStorage.setItem("username",username);
        localStorage.setItem("password",password);
        this.router.navigate(['list-task']);
      }
      else{
        this.invalidLogin=true;
      }
  }
  ngOnInit() 
  {
    this.loginForm=this.formBuilder.group({
      
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }
}
