import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  pwd;

  constructor(public  router:Router) { }

  ngOnInit() {
  }
  login(){

    console.log("email",this.email)
    console.log("password",this.pwd)

    if(this.email=="admin" && this.pwd=="admin"){
    this.router.navigate(["home"])
      localStorage.setItem("state","1")
    }else
      alert("error")
  }

}
