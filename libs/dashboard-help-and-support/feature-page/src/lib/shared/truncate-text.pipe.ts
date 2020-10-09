import { Pipe, PipeTransform } from '@angular/core';
import { truncate } from 'lodash';

@Pipe({
  name: 'truncatetext',
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, length: number = 200): string {
    return truncate(value, {
      length,
      separator: ' ',
    });
  }
}
