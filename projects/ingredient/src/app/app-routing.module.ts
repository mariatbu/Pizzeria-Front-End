import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleIngredientComponent } from './single-ingredient/single-ingredient.component';

const routes: Routes = [
  {
    path: '',
    component: SingleIngredientComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleChild { }
