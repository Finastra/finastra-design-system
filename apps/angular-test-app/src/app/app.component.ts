import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { OverlayContainer } from '@angular/cdk/overlay';
import { nestedRoutes } from './nested-routes';

const darkThemeLSName = 'darkTheme';

@Component({
  selector: 'ffdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';
  dark = false;
  nestedRoutes = nestedRoutes;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private _overlayContainer: OverlayContainer
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.title = this.route.root.firstChild ? this.route.root.firstChild.snapshot.data['title'] : '';
      }
    });
  }

  ngOnInit() {
    const darkTheme = this.getDarkThemeValue();
    this.dark = darkTheme;
    this.setTheme(darkTheme);
  }

  toggleTheme() {
    const darkTheme = this.getDarkThemeValue();
    this.dark = !darkTheme;

    localStorage.setItem(darkThemeLSName, this.dark.toString());

    this.setTheme(this.dark);
  }

  getDarkThemeValue(): boolean {
    return localStorage.getItem(darkThemeLSName) === 'true';
  }

  setTheme(dark: boolean) {
    const darkThemeClass = 'uxg-dark-theme';

    if (dark) {
      this.renderer.addClass(this.document.body, darkThemeClass);
      this._overlayContainer.getContainerElement().classList.add(darkThemeClass);
    } else {
      this.renderer.removeClass(this.document.body, darkThemeClass);
      this._overlayContainer.getContainerElement().classList.remove(darkThemeClass);
    }
  }
}
