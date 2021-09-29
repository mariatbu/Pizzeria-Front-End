import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path: 'carta', component: carta },
  //{path: 'pizzaAdd', component: pizzaAdd },
  //{path: 'ingredientAdd', component: ingredientAdd },
  //{path: 'logout', component: logout },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
