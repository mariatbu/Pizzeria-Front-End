import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Ingredient } from '../ingredient/ingredient';
import { environment } from '../../../../../src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  url: string = environment.url;

  constructor(public http: HttpClient) {
     
   }

   getAll(): Observable<Ingredient []>{
      //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
      return <Observable<Ingredient[]>> this.http.get(`${this.url}/ingredients`);
   }

}
