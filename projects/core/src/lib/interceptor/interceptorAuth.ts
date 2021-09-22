import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { DecoratorService } from "./decoratorService";

@Injectable({ providedIn: 'root' })
export class InterceptorAuth implements HttpInterceptor {    
   
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const autorizationObserver = DecoratorService.getAutorizationObserver();
        if (autorizationObserver.addToken) {
            const modified = req.clone({ setHeaders: { 'X-Custom-Header-1': '1' } });            
            autorizationObserver.addToken = false;
            return next.handle(modified);
        }
        return next.handle(req);
    }
}