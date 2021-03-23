import {
  Component,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'wes-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @ViewChild(TemplateRef)
  content: TemplateRef<any>;
}

