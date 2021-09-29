import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-ingredient',
  templateUrl: './single-ingredient.component.html',
  styleUrls: ['./single-ingredient.component.css']
})
export class SingleIngredientComponent  {
  name = 'Single Ingredient';
  ingredientArray = [{name:"a"}, {name:""}, {name:"b"}, {name:"c"}];

  ngOnInit() {
      this.addNewIngredient();
  }

  addNewIngredient() {
      this.ingredientArray.forEach((currentValue) => {
        if(currentValue.name) {
            this.ingredientArray.push([{''}]);
        }
      });
  }



}
