import { NgModule } from '@angular/core';
import { CoreComponent} from './core.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CoreComponent
  ],
  imports: [
  ],
  exports: [
    ButtonComponent,
    CoreComponent
  ]
})
export class CoreModule { }
