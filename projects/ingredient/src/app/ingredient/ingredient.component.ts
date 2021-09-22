import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from './ingredient';
import { IngredientService } from '../service/ingredient.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit, OnDestroy {
  private dispose : Subscription;
  public ingredients : Ingredient [] = null;
  public selectedIngredient : Ingredient = null;
  constructor(private ingredientService: IngredientService) { 
    
  }

  ngOnInit(): void {
    this.subscription = this.ingredientService.getAll().subscribe((data)=>this.ingredients = data as Ingredient[]);
    
  } 

  ngOnDestroy(): void {

    this.dispose && this.dispose()
  }


}
