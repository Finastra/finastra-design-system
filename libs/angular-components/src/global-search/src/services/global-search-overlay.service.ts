import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ComponentRef, Injectable, InjectionToken, Injector } from '@angular/core';

import { SearchConfig } from '../components/global-search-overlay/global-search-overlay-config';
import { SearchOverlayRef } from '../components/global-search-overlay/global-search-overlay-ref';
import { GlobalSearchOverlayComponent } from '../components/global-search-overlay/global-search-overlay.component';
import { SEARCH_CONFIG } from '../components/global-search-overlay/global-search-overlay-token';
@Injectable({
  providedIn: 'root'
})
export class GlobalSearchOverlayService {
  constructor(private overlay: Overlay, private parentInjector: Injector) {}

  open(config?: SearchConfig) {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global(),
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'uxg-global-search-overlay-backdrop',
      panelClass: 'uxg-global-search-overlay-pane'
    });

    const searchOverlayRef = new SearchOverlayRef(overlayRef);
    const injector = this.getInjector(config, searchOverlayRef, this.parentInjector);
    const containerPortal = new ComponentPortal(GlobalSearchOverlayComponent, null, injector);

    const componentRef: ComponentRef<GlobalSearchOverlayComponent> = overlayRef.attach(containerPortal);
    const element: HTMLElement = <HTMLElement>componentRef.location.nativeElement;
    element.style.width = '100%';

    return searchOverlayRef;
  }

  getInjector(config: SearchConfig, overlayRef: SearchOverlayRef, parentInjector: Injector) {
    const tokens = new WeakMap();
    tokens.set(SearchOverlayRef, overlayRef);
    tokens.set(SEARCH_CONFIG, config || {});

    return new PortalInjector(parentInjector, tokens);
  }
}
