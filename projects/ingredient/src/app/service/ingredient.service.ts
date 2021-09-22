import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Ingredient } from '../ingredient/ingredient';
import { environment } from '../../environments/environment'
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  url: string = environment.url

  constructor(public http: HttpClient) {
     
   }

   //post(ingredient: Ingredient){
      //return this.http.post(`${this.url + "/ingredients"}`, ingredient);
   //}//
   
   getAll(){
      //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
      return this.http.get(`${this.url}/ingredients`)
   }

   
   
}
