import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, of, from } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LazyloadScriptService {
  private _loadedScripts: Map<string, Observable<any>> = new Map();
  constructor(@Inject(DOCUMENT) private readonly document: any) {}

  load(scriptPath: string, moduleId: string): Observable<any> {
    if (!this._loadedScripts.has(scriptPath)) {
      this._loadedScripts.set(scriptPath, from(this._load(scriptPath, moduleId)).pipe(share()));
    }
    return this._loadedScripts.get(scriptPath)!;
  }

  private _load(scriptPath: string, moduleId: string): Promise<any> {
    const script: HTMLScriptElement = document.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptPath;
    script.onerror = () => console.error(`Error loading ${moduleId} from ${scriptPath}`);

    this.document.body.appendChild(script);
    return new Promise((resolve, reject) => {
      let counter = 200; // equivalent of 10 seconds...

      const fn = () => {
        const loadedModule = (window as any)[moduleId];
        if (loadedModule) {
          resolve(loadedModule);
        } else if (counter > 0) {
          counter--;
          setTimeout(fn, 50);
        } else {
          reject(new Error(`Error loading ${moduleId} library from ${scriptPath}. Timeout.`));
        }
      };

      fn();
    });
  }
}
