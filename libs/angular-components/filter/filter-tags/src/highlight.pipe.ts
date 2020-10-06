import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  transform(text: string, search: string): string {
    const pattern = search
      .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
      .split(' ')
      .filter((t) => t.length > 0)
      .join('|');
    const regex = new RegExp(pattern, 'gi');
    if (!text.match(regex)) {
      return text;
    }
    return search ? text.replace(regex, (match) => `<span class="search-term-highlight">${match}</span>`) : text;
  }
}
