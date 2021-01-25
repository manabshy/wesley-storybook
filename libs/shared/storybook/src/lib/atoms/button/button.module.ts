import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { ButtonComponent } from './button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faBell,
  faCalendar

} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [ButtonComponent],
  imports:[
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ButtonComponent]
})

export class ButtonModule {

  constructor() {
    library.add(
      faBars,
      faBell,
      faCalendar,
    );
  }
}
