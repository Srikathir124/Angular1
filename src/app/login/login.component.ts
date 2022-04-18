import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = '';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    this.router.navigate(['welcome',this.username]);
  }

}
