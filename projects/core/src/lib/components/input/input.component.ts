import { Component, Input} from '@angular/core';
import { FormGroup, ValidationErrors, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
   @Input() type:String="text";
   @Input() placeholder = "text";
   @Input() label = "text";
   @Input() formGroup: FormGroup|any;
   @Input() name: String | any;

   private get control(): FormControl | any{
    return this.formGroup && this.formGroup.get(this.name)
  }
  get errors(): ValidationErrors | null{
    return  this.control?.errors
  }
  get dirty(): boolean{
    return this.control?.dirty
  }
}
