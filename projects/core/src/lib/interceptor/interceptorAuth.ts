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
                const modified = req.clone({ setHeaders: { 'Authorization': `${user.type} ${user.token}` }});
                autorizationObserver.addToken = false;
                return next.handle(modified);          
            }
              
        }
        return next.handle(req);
    }
}