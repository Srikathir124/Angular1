import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpringService1Service } from '../service/spring/spring-service1.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  loggedInUser : string = '';
  springUserName : string =  '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SpringService1Service
    ) { }

  ngOnInit(): void {
    this.loggedInUser = this.route.snapshot.params['name'];
  }

  returnToHomePage(){
    this.router.navigate(["login"]);
  }

  goToDoList(){
    this.router.navigate(["todolist"]);
  }

  getSpringUserName(){
      this.springUserName = this.service.getUserName();
  }
}