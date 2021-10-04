import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleIngredientComponent } from '../single-ingredient/single-ingredient.component';

@NgModule({
  declarations: [
    SingleIngredientComponent,
  ],

  exports: [
    SingleIngredientComponent,
  ], 

  imports: [
    CommonModule,
  ]
})
export class IngredientModule { }
