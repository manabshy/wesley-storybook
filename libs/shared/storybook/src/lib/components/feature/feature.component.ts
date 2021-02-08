import {
  Component,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'wes-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeatureComponent {
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

