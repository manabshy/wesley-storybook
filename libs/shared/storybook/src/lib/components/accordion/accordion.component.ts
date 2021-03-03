import {
  Component,
  Input,
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
  @Input() background = 'wes-bg-solid-white';
  @Input() idAttribute: string = 'frequentlyAskedQuestions';
  @Input() title: string = 'Frequently Asked Questions';
  constructor() {}

  toggleMenu(event: Event) {
    const toggleIcon = (event.currentTarget as HTMLElement).parentElement;
    const toggleDiv = toggleIcon.querySelector('.toggle-content');
    if (!toggleIcon.classList.contains('active')) {
      toggleIcon.classList.add('active');
      toggleDiv.classList.remove('hidden');
    } else {
      toggleIcon.classList.remove('active');
      toggleDiv.classList.add('hidden');
    }
  }
}
