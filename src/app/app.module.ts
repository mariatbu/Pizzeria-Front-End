import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '../../projects/core/src/lib/core.module';
import { IngredientSharedModule } from 'projects/ingredient/src/app/app.module';
import { InputComponent } from 'projects/core/src/lib/components/input/input.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IngredientSharedModule.forRoot(),
    CoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
