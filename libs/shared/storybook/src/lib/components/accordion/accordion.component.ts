import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'wes-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent {
  @ViewChild(TemplateRef)
  content: TemplateRef<any>;
  @Input() active = false;
  @Input() type = 'base';
  @Input() value;
  toggleIcon;
  constructor(private el: ElementRef) {}
  /**
   * If the panel is opened or closed
   */
  @Input() opened = false;

  /**
   * Text to display in the group title bar
   */
  @Input() title: string;

  opened_1: Boolean = false;
  opened_2: Boolean = false;
  /**
   * Emitted when user clicks on group titlebar
   * @type {EventEmitter<any>}
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    console.log(this.value);
  }
  toggleMenu(event: number) {
    if ( event === 0 ) {
      this.toggleIcon = this.el.nativeElement.querySelector('.item.one');
      if ( !this.toggleIcon.classList.contains('active')) {
        this.toggleIcon.classList.add('active');
      }
      else {
        this.toggleIcon.classList.remove('active');
      }
      this.opened_1 = !this.opened_1 ? true : false;
    }
    if ( event === 1 ) {
      this.toggleIcon = this.el.nativeElement.querySelector('.item.two');
      if ( !this.toggleIcon.classList.contains('active')) {
        this.toggleIcon.classList.add('active');
      }
      else {
        this.toggleIcon.classList.remove('active');
      }
      this.opened_2 = !this.opened_2 ? true : false;
    }
  }

}

