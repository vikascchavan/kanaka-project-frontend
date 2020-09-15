import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {
  forget: any = {};
  password: string;
  confirmPassword: string;
  strIntoObj: any;
  userObject: any;
  match: boolean = false;
  emptyPass: boolean = false;
  submitted: boolean = false;
  wrongCred: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  cancleButton(){
    this.router.navigate(["/"])
  }
  // function resetPass checks that given password is null or not , if it not then it reset the password and then save it in localStorage.
  resetPass() {
    this.submitted = true;
    console.log('values', this.forget)
    if (this.forget.password != null) {
      console.log('pass', this.forget.password);
      let str: string = localStorage.getItem('data');
      this.strIntoObj = JSON.parse(str);

      for (var object of this.strIntoObj) {
        if (object.email == this.forget.username) {
          this.userObject = object;
          this.router.navigate(["/welcome"]);
          this.wrongCred = false;
          this.strIntoObj.pop(this.userObject);
          this.userObject.password = this.forget.password;
          this.userObject.confirmPassword = this.forget.confirmPassword;
          this.strIntoObj.push(this.userObject);
          localStorage.setItem('data', JSON.stringify(this.strIntoObj));
          localStorage.setItem('password', this.password);
          this.router.navigate(["/login"]);
          this.emptyPass = false;
        }
        else{
          this.wrongCred = true;
        }

      }
      
    }
    else {
      this.emptyPass = true;
      this.router.navigate(["/forgetpass"]);

    }
  }

  cancle() {
    this.router.navigate(["/"])
  }
  // the passwordMatch function check that the password and confirmPassword enterd by user are same or not.
  passwordMatch(value: any): void {
    if (this.forget.password != this.forget.confirmPassword) {
      this.match = true;
    }
    else {
      this.match = false;
    }
  }

}

