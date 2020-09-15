import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  str: string = sessionStorage.getItem('currentUser');
  loggedInUser: any = JSON.parse(this.str);
  massage = this.loggedInUser.firstname
  profileObject: any;
  flag: string = '0';
  strIntoObj : any;
  currentUserObject : any;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  cancleButton(){
    this.flag = '0'

  }
// bellow function viewProfile works for navigate into viewprofile div containts.

  viewProfile() {
    this.flag = '1';
    this.profileObject = JSON.parse(sessionStorage.getItem('currentUser'));
    console.log('profileObj', this.profileObject);
  }

// bellow function editProfile works for navigate into editprofile div containts.

  editProfile() {
    this.flag = '2';
    this.profileObject = JSON.parse(sessionStorage.getItem('currentUser'));
    console.log('profileObj', this.profileObject);
  }
// this submit function update the edited data in localStorage and sessionStorage.
  submit() {
    this.currentUserObject = JSON.parse(sessionStorage.getItem('currentUser'));
    console.log('currentUserObject',this.currentUserObject);
    let str: string = localStorage.getItem('data');
    this.strIntoObj = JSON.parse(str);

    for( var object of this.strIntoObj){
      if(object.firstname == this.currentUserObject.firstname ||
          object.lastname == this.currentUserObject.lastname ||
          object.email == this.currentUserObject.email){
          // console.log('current values',object);
          this.strIntoObj.pop(object);
          object = this.profileObject;
          this.strIntoObj.push(object);
          localStorage.setItem('data',JSON.stringify(this.strIntoObj));
          sessionStorage.setItem('currentUser',JSON.stringify(object));
          this.flag = '0'
        }
    }
    this.router.navigate(["/welcome"]);
  }

// the logedOut function bellow helps us to navigate into home page.
  logedOut() {
    this.router.navigate(["/"])
    sessionStorage.clear();
  }
}

