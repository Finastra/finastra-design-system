import { Component, ElementRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
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
    private _element: ElementRef<HTMLElement>,
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
      this._element.nativeElement.classList.add(darkThemeClass);
      this._overlayContainer.getContainerElement().classList.add(darkThemeClass);
    } else {
      this._element.nativeElement.classList.remove(darkThemeClass);
      this._overlayContainer.getContainerElement().classList.remove(darkThemeClass);
    }
  }
}
