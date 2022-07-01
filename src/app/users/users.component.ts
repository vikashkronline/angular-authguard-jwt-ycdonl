import { Component, OnInit } from '@angular/core';

import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['user_name', 'first_name', 'email', 'status'];
  dataSource: User[] = [];
  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.usersData();
  }

  usersData(){
    this._authService.allUsers()
    .subscribe(
      res => {
        this.dataSource = res.result
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
              this.router.navigate(['/login']);
          }
        }
      }
    )
  }

}

export interface User {
  user_name: string;
  first_name: string;
}
