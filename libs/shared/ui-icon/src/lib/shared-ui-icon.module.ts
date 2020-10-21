import { NgModule } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [MatIconModule],
  exports: [MatIconModule],
  providers: [MatIconRegistry],
})
export class SharedUiIconModule {
  private path = '../../assets/icons/svg';
  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry
  ) {
    this.matIconRegistry
      .addSvgIcon(
        'briefcase',
        this.setIconPath(`${this.path}/icon-briefcase.svg`)
      )
      .addSvgIcon('legal', this.setIconPath(`${this.path}/icon-legal.svg`))
      .addSvgIcon('heart', this.setIconPath(`${this.path}/icon-heart.svg`))
      .addSvgIcon(
        'open-book',
        this.setIconPath(`${this.path}/icon-open-book.svg`)
      )
      .addSvgIcon('tooth', this.setIconPath(`${this.path}/icon-tooth.svg`))
      .addSvgIcon(
        'stethoscope',
        this.setIconPath(`${this.path}/icon-stethoscope.svg`)
      )
      .addSvgIcon(
        'arrow-left',
        this.setIconPath(`${this.path}/icon-arrow-left.svg`)
      );
  }

  private setIconPath(icon: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(icon);
  }
}
