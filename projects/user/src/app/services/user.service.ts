import { environment } from 'src/environments/environment';
import { UserDto } from 'projects/core/src/lib/user/userDto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Authorize } from 'projects/core/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = environment.url;

  constructor(public http: HttpClient) {
     
   }

   //@Authorize()
   addUser(body: User): Observable<UserDto>{
      return <Observable<UserDto>> this.http.post(`${this.url}/users`, body);
   }

}
