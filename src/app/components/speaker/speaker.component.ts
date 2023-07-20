import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-speaker',
  templateUrl: 'speaker.component.html',
  styleUrls: ['speaker.component.css'],
})
export class Speaker {
  @Input()
  Image: string = '/assets/speakers-1-1500w.png'
  @Input()
  Name: string = 'Samantha Johnson'
  @Input()
  Detail: string = 'CEO, Opary'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
