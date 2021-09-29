import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    MenuComponent
  ],
  imports: [
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
