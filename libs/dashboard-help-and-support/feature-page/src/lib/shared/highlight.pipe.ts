import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(text: any, searchText: string): any[] {
    if (!text) {
      return [];
    }
    if (!searchText) {
      return text;
    }

    //   const value = list.replace(searchText, `<strong>${searchText}</strong>`);

    let pattern = searchText.replace(
      /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
      '\\$&'
    );
    pattern = pattern
      .split(' ')
      .filter((t) => {
        return t.length > 0;
      })
      .join('|');

    const regex = new RegExp(pattern, 'gi');
    return text
      .replace(/<[^>]+>/g, '')
      .replace(regex, (match) => `<strong>${match}</strong>`);
  }
}
