import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {
  @Input() type: String = "submit";
  @Input() text: String = "Haz click";
  @Output() btnClick: EventEmitter<String> = new EventEmitter<String>();


  click(){
    this.btnClick.emit();
  }
}
