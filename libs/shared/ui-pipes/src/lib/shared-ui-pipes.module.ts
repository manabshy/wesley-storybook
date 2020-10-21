import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SafeUrlPipe, SafeHtmlPipe],
  exports: [SafeUrlPipe, SafeHtmlPipe],
})
export class SharedUiPipesModule {}
