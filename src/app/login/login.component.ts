import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { iif } from 'rxjs';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }
onSubmit(f:NgForm){
  if(f.value["email"]==="admin" && f.value["password"]==="admin"){
    console.log("hi");
    this.route.navigateByUrl("/home");

  }

}
}
