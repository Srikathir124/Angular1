
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export class Todo{
  constructor(
    public id : number,
    public description : string,
    public status :string
    ){}
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos = [
    new Todo(1,"Live a Healthy Life","Will be completed Soon"),
    new Todo(2,"Live a Peaceful One","Will be completed Soon"),
    new Todo(3,"Earn a lot","Will be completed Soon"),
    new Todo(4,"Be Statisfied","Will be completed Soon")
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  returnToLoginPage(){
    this.router.navigate(["login"]);
  }
}


