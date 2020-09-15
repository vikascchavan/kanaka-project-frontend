import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})
export class SmartTableComponent implements OnInit {
  data : any ;
  ngOnInit() {
    this.data =  JSON.parse(localStorage.getItem('data'));
    console.log('data',this.data);
  }

  settings = {
    columns: {
      firstname: {
        title: 'Firstname',
        filter: true
      },
      lastname: {
        title: 'Lastname',
        filter: true
      },
      address: {
        title: 'Address',
        filter: true
      },
      email: {
        title: 'Email',
        filter: true
      },
      contact: {
        title: 'Contact',
        filter: true
      },
      gender: {
        title: 'Gender',
        filter: true
      }
    }
  };
  
  
  constructor() {
  }

  onSearch(query: string = '') {
    this.data.setFilter([
      // fields we want to include in the search
      {
        field: 'firstname',
        search: query
      },
      {
        field: 'lastname',
        search: query
      },
      
      {
        field: 'address',
        search: query
      },
      {
        field: 'email',
        search: query
      },
      {
        field: 'contact',
        search: query
      },
      
      {
        field: 'gender',
        search: query
      }
    ], true);
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

  
 

}
