import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Ingredient } from '../ingredient/ingredient';
import { environment } from '../../../../../src/environments/environment';
import { Observable } from 'rxjs';
import { Authorize } from 'projects/core/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  url: string = environment.url;

  constructor(public http: HttpClient) {
     
   }
   
   @Authorize()
   getAll(): Observable<Ingredient []>{
      return <Observable<Ingredient[]>> this.http.get(`${this.url}/ingredients`);
   }

}
