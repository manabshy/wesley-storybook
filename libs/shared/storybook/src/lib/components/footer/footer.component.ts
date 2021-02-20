import {
  Component,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'wes-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  @ViewChild(TemplateRef)
  content: TemplateRef<any>;
  @Input() active = false;
  @Input() type = 'base';
  @Input() cardCount;
  @Input() cardTitle;
  @Input() title;
  @Input() message;
  @Input() variant;
  @Input() size;
  @Input() value;
  constructor(private el: ElementRef) {}


}

