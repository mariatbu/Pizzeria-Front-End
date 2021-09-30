import { Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

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
}
