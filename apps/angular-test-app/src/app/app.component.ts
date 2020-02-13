import { Component, Renderer2, Inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'ffdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  dark = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private _overlayContainer: OverlayContainer
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.title = this.route.root.firstChild ? this.route.root.firstChild.snapshot.data['title'] : '';
      }
    });
  }

  toggleTheme() {
    const darkThemeClass = 'uxg-dark-theme';

    this.dark = !this.dark;

    if (this.dark) {
      this.renderer.addClass(this.document.body, darkThemeClass);
      this._overlayContainer.getContainerElement().classList.add(darkThemeClass);
    } else {
      this.renderer.removeClass(this.document.body, darkThemeClass);
      this._overlayContainer.getContainerElement().classList.remove(darkThemeClass);
    }
  }
}
