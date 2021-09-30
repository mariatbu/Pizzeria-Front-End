import { NgModule } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    CheckboxComponent
  ],
  imports: [
    ReactiveFormsModule,
  ],
  exports: [
    ButtonComponent,
    InputComponent
  ]
})
export class CoreModule {
  constructor(){}
 }
