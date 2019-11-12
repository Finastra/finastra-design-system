import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as elasticlunr from 'elasticlunr';

export interface Result {
  doc: Object;
  ref: string;
  score: number;
}

export interface ResultGroup {
  key: string;
  value: Partial<Result>[];
}

@Injectable({
  providedIn: 'root'
})
export class GlobalSearchService {
  private index: any;
  itemClicked = new ReplaySubject<Object>(1);

  initIndex(fields?: string[], ref?: string) {
    return new Promise((resolve, reject) => {
      if (!this.index) {
        this.index = elasticlunr(function() {
          if (fields && fields.length) {
            fields.forEach(field => {
              this.addField(field);
            });
          }
          this.setRef(ref || 'id');
          resolve();
        });
      } else {
        resolve();
      }
    });
  }

  addFields(fields?: string[]) {
    if (this.index && fields && fields.length) {
      fields.forEach(field => {
        this.index.addField(field);
      });
    }
  }

  addDoc(doc: any) {
    if (this.index) {
      this.index.addDoc(doc);
    }
  }

  search(query: string): any {
    if (this.index) {
      const fields = this.index.getFields().reduce((acc, item) => {
        acc[item] = { boost: 1 };
        return acc;
      }, {});
      return this.index.search(query, {
        fields,
        bool: 'AND',
        expand: true
      });
    }
  }

  onItemClick(item: Object) {
    this.itemClicked.next(item);
  }

  constructor() {}
}
