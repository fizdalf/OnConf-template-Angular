import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Speaker } from './speaker/speaker.component'
import { SectionNumeral } from './section-numeral/section-numeral.component'

@NgModule({
  declarations: [Speaker, SectionNumeral],
  imports: [CommonModule, RouterModule],
  exports: [Speaker, SectionNumeral],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
