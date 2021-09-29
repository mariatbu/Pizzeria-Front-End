import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { DecoratorService } from "./decoratorService";
import  {UserDto} from '../user/userDto'

@Injectable({ providedIn: 'root' })
export class HttpInterceptorAuth implements HttpInterceptor {    
   
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const autorizationObserver = DecoratorService.getAuthorizationObserver();
        if (autorizationObserver.addToken) {
            const user: UserDto = JSON.parse(localStorage.getItem('user')|| '') as UserDto; 
           
            if(user.token){
                const modified = req.clone({ setHeaders: { 'Authorization': `eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJzb2Z0dGVrSldUIiwic3ViIjoiUGF0cmljaWEiLCJhdXRob3JpdGllcyI6WyJVU0VSIl0sImlhdCI6MTYzMjg5NjIzNiwiZXhwIjoxNjMyODk5ODM2fQ.j8sasFj23cuq9Ulp0cR3lMb-i432edSbyJl4rvK2SnAcpYvRHBXIAvrN7XjN9tSrWEFVq2F5uMOK4W9uHmEtfw` }});
                autorizationObserver.addToken = false;
                return next.handle(modified);          
            }
              
        }
        return next.handle(req);
    }
}