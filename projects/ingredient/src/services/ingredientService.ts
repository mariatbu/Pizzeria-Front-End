import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class IngredientService{
    constructor(private http:HttpClient){

    }
    /*post(name:String){
        return this.http.post('/data.json')
    }
    postPrice(ingredient:Float32List){
        return this.http.post('/data.json')
    } */

}