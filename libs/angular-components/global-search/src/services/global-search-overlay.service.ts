import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, Injector } from '@angular/core';
import { SearchConfig } from '../components/global-search-overlay/global-search-overlay-config';
import { SearchOverlayRef } from '../components/global-search-overlay/global-search-overlay-ref';
import { SEARCH_CONFIG } from '../components/global-search-overlay/global-search-overlay-token';
import { GlobalSearchOverlayComponent } from '../components/global-search-overlay/global-search-overlay.component';

export type GlobalSearchOverlay = [SearchOverlayRef, ComponentRef<GlobalSearchOverlayComponent>];
@Injectable({
  providedIn: 'root'
})
export class GlobalSearchOverlayService {
  constructor(private overlay: Overlay, private parentInjector: Injector) {}

  open(config?: SearchConfig): GlobalSearchOverlay {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global(),
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'uxg-global-search-overlay-backdrop',
      panelClass: 'uxg-global-search-overlay-pane'
    });

    const searchOverlayRef = new SearchOverlayRef(overlayRef);
    const injector = config ? this.getInjector(config, searchOverlayRef) : this.parentInjector;
    const containerPortal = new ComponentPortal(GlobalSearchOverlayComponent, null, injector);

    const componentRef: ComponentRef<GlobalSearchOverlayComponent> = overlayRef.attach(containerPortal);
    const element: HTMLElement = <HTMLElement>componentRef.location.nativeElement;
    element.style.width = '100%';
    componentRef.instance.searchTermChange.subscribe((value: any) => {
      if (config) config.searchTermChange(value);
    });
    componentRef.instance.itemClick.subscribe((value: any) => {
      if (config) config.itemClick(value);
    });
    componentRef.instance.searchClose.subscribe((value: any) => {
      if (config) config.searchClose(value);
    });
    return [searchOverlayRef, componentRef];
  }

  getInjector(config: SearchConfig, overlayRef: SearchOverlayRef) {
    return Injector.create({
      providers: [
        {
          provide: SEARCH_CONFIG,
          useValue: config
        },
        {
          provide: SearchOverlayRef,
          useValue: overlayRef
        }
      ]
    });
  }
}
