import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  submitted = false;
  wrongCredential = false;
  strIntoObj: any;
  userObject: any;
  body : any = {};
  constructor(
    private router: Router,
    private api : ApiService,
  ) { }

  ngOnInit() {
  }

  signUp() {
    this.router.navigate(["/signup"]);
  }


  // bellow function checks that the credentials entered by user with the saved credentials
  logIn() {
    this.body.username = this.username;
    this.body.password = this.password;
    this.api.loginUser(this.body).subscribe(
      result => {

        console.log('login user api_result', result);
      }
    );
    this.submitted = true;
    console.log('username', this.username);
    console.log('password', this.password);
    let str: string = localStorage.getItem('data');
    this.strIntoObj = JSON.parse(str);

    for (var object of this.strIntoObj) {
      if (object.email == this.username && object.password == this.password) {
        this.userObject = object;
        this.wrongCredential = false;
        sessionStorage.setItem('currentUser', JSON.stringify(this.userObject));
        this.router.navigate(["/welcome"]);
      }
      else {
        this.wrongCredential = true;
      }


    }
  }

}
