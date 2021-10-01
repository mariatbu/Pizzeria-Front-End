import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient';
import { IngredientService } from '../service/ingredient.service';

@Component({
  selector: 'app-single-ingredient',
  templateUrl: './single-ingredient.component.html',
  styleUrls: ['./single-ingredient.component.css']
})
export class SingleIngredientComponent implements OnInit {
  
  ingredients?: Ingredient[]

  constructor(private http2Server: IngredientService) { }

  ngOnInit() {
    this.getIngredients();
  }

  private getIngredients(){
    this.http2Server.getAll().subscribe(
      ingredientData => { this.ingredients = ingredientData }
    )

  }

 



}
