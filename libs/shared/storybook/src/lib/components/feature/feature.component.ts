import {
  Component,
  ElementRef,
  Input,
  SimpleChanges,
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
  bgcolor: string;
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

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    switch (this.value) {
      case '#F6F6F6':
        this.bgcolor = '#FFF';
        break;
      case '':
        this.bgcolor = '#F6F6F6';
        break;
      default:
        break;
    }
  }
}
