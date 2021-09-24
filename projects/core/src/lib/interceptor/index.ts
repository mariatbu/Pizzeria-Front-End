import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpInterceptorAuth } from './interceptorAuth'
import {AuthDenied} from './interceptorDenied'
import {InterceptorUnauthorized} from './interceptorUnauthorized'
import {InterceptorError} from './interceptorError'
import {InterceptorNotFound} from './interceptorNotFound'
export const INTERCEPTORS =[
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorAuth,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthDenied,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorUnauthorized,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorError,
        multi: true
      },   
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorNotFound,
        multi: true
      },
]