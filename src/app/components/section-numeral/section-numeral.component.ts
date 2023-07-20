import { Component, Input } from '@angular/core'

@Component({
  selector: 'section-numeral',
  templateUrl: 'section-numeral.component.html',
  styleUrls: ['section-numeral.component.css'],
})
export class SectionNumeral {
  @Input()
  Number: string = '01'
  constructor() {}
}
