import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserCreateDTO } from '../userDTO/userCreateDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: String;


  constructor(private http: HttpClient) {
    this.url = "http://localhost:9999";
  }

  // post(data: UserCreateDTO){
  //   return this.http.post(`${this.url + "/user"}`, data,{});
  // }


}
