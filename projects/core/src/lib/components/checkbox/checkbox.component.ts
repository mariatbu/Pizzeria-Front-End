import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

  @Input() text: string ='';
  @Input() formGroup:FormGroup|any;
  @Input() name:string|any
  
  constructor() { }

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
