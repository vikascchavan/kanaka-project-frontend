import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  users_array : any = {};
  match : boolean = false;
  strIntoObj : any =[];
  new_data : any = {};

  constructor(
    private router: Router,
    private api : ApiService,
  ) { }
  
  ngOnInit() {

  }

  cancleButton(){
    this.router.navigate(["/login"]);
  }

  // The signIn function bellow stores the email, password and users first name in localstorage and then navigate to the login component.
  
  signUp() {
    // bellow commented section is work for store the user record in the localStorage 
    // this.new_data = this.users_array;

    // if (localStorage.getItem('data') == null) {
    //   console.log('it is null')
    //   localStorage.setItem('data', '[]');
    // }
    // let str: string = localStorage.getItem('data');
    // this.strIntoObj = JSON.parse(str);
    // this.strIntoObj.push(this.new_data);
    // localStorage.setItem('data', JSON.stringify(this.strIntoObj));
    // this.router.navigate(["/login"]);

    this.api.createUser(this.users_array).subscribe(
      result => {

        console.log('api_result', result);
      }
    );

  }


// the passwordMatch function bellow

  passwordMatch(value: any): void {
    if (this.users_array.password != this.users_array.confirmPassword) {
      this.match = true;
    }
    else {
      this.match = false;
    }
  }
}
