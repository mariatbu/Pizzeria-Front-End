import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientService } from '../services/ingredientService';
import { ReactiveFormsModule } from '@angular/forms';
import { IngredientComponent } from './ingredient/ingredient.component';
import { SingleIngredientComponent } from './single-ingredient/single-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    SingleIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class IngredientSharedModule{
  static forRoot(): ModuleWithProviders{
    return{
      ngModule: AppModule, 
      providers : [IngredientService]
    }
  }
}
