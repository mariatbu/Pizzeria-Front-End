import { Component } from '@angular/core';
import { IngredientService } from 'projects/core/src/lib/services/ingredientService';
import { isLoading$ } from 'projects/core/src/lib/services/loading.service';
import { LoadingService } from 'projects/core/src/lib/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading$ = isLoading$;
  title = 'PizzeriaFrontEnd';
  condition = false;

  constructor (public loader: LoadingService, private ingredientService: IngredientService){
    this.triggerLoadingIndicator()
  }
  triggerLoadingIndicator() {
    this.ingredientService.get("1").subscribe({
      error:()=>console.log("error component"),
      complete:()=>console.log("complete component")
    })
  }
}
