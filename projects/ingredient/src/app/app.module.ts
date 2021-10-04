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
import { IngredientModule } from './ingredient/ingredient.module';

const providers: any[] = [IngredientService];

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    IngredientModule
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
      providers : providers
    }
  }
}
