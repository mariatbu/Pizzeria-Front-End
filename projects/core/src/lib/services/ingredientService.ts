import { Injectable } from "@angular/core";
import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { spinner } from '../decorators/spinner'
import {of} from 'rxjs'

@Injectable({providedIn:'root'})
export class IngredientService{
    constructor(private httpClient:HttpClient){

    }
    @spinner()
    get(id:String){
        return of([1,2,3]);
        //return this.httpClient.get('/pepino');
    }
}