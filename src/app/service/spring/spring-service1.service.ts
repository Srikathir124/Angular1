import { HttpClient } from'@angular/common/http;
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpringService1Service {

  constructor(
    private http: HttpClient
  ) { }

  getUserName(){
    return "SpringUserName 1";
  }
}
