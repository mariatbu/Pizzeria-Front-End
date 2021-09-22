import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-core-lib',
  template: `
    <p>
      core-lib works!
    </p>
  `,
  styles: [
  ]
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}