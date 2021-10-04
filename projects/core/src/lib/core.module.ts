import { NgModule } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { MenuComponent } from './components/menu/menu.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CapErrorComponent } from './components/cap-error/cap-error.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    MenuComponent,
    CheckboxComponent,
    CapErrorComponent
  ],
  imports: [
    ReactiveFormsModule,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    MenuComponent
  ]
})
export class CoreModule {
  constructor(){}
 }
