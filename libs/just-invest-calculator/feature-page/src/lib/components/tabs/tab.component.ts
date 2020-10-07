import {
  Component,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'wes-tab',
  template: `<ng-template><ng-content></ng-content></ng-template>`,
  encapsulation: ViewEncapsulation.None,
})
export class TabComponent {
  @ViewChild(TemplateRef)
  content: TemplateRef<any>;
  @Input() active = false;
}
