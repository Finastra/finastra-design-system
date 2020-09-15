import { Overlay, OverlayConfig, OverlayRef, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ComponentFactoryResolver, ComponentRef, Inject, Injectable } from '@angular/core';
import { ToasterContainerComponent } from './toaster-container.component';
import { ToasterComponent } from './toaster.component';
import { ToasterConfig, TOASTER_CONFIG } from './toaster.config';
import { Toast, ToastLogicalPosition, ToastPosition, ToastType } from './toaster.model';

export class ToasterRef {
  constructor(private toasterContainer: ToasterContainer, private toast: Toast) {}

  close() {
    this.toasterContainer.destroy(this.toast);
  }
}

@Injectable()
export class ToasterContainerOverlayService {
  constructor(private overlay: Overlay) {}

  get scrollStrategies(): ScrollStrategyOptions {
    return this.overlay.scrollStrategies;
  }

  create(config?: OverlayConfig): OverlayRef {
    // Returns an OverlayRef (which is a PortalHost)
    return this.overlay.create({
      ...config,
      panelClass: 'uxg-toaster-overlay'
    });
  }
}

interface ToasterOverlayWithContainer {
  overlayRef: OverlayRef;
  toasterContainer: ToasterContainer;
}

export class ToasterContainer {
  protected toasts: Toast[] = [];
  protected prevToast!: Toast | null;

  get nativeElement() {
    return this.containerRef.location.nativeElement;
  }

  constructor(protected position: ToastPosition, protected containerRef: ComponentRef<ToasterContainerComponent>) {}

  attach(toast: Toast): ToasterRef {
    const toastComponent: ToasterComponent = this.attachToast(toast);

    if (toast.config.destroyByClick) {
      this.subscribeOnClick(toastComponent, toast);
    }

    if (toast.config.duration) {
      this.setDestroyTimeout(toast);
    }

    this.prevToast = toast;

    return new ToasterRef(this, toast);
  }

  destroy(toast: Toast) {
    if (this.prevToast === toast) {
      this.prevToast = null;
    }

    this.toasts = this.toasts.filter((t) => t !== toast);
    this.updateContainer();
  }

  private attachToast(toast: Toast): ToasterComponent {
    return this.attachToTop(toast);
  }

  private attachToTop(toast: Toast): ToasterComponent {
    this.toasts.unshift(toast);
    this.updateContainer();
    return this.containerRef.instance.toasts.first;
  }

  private setDestroyTimeout(toast: Toast) {
    setTimeout(() => this.destroy(toast), toast.config.duration);
  }

  private subscribeOnClick(toastComponent: ToasterComponent, toast: Toast) {
    toastComponent.destroy.subscribe(() => this.destroy(toast));
  }

  private updateContainer() {
    patch(this.containerRef, { content: this.toasts, position: this.position });
  }
}

export function patch<T>(container: ComponentRef<T>, containerContext: Object): ComponentRef<T> {
  Object.assign(container.instance, containerContext);
  container.changeDetectorRef.detectChanges();
  return container;
}

@Injectable()
export class ToasterContainerRegistry {
  private overlays: Map<ToastPosition, ToasterOverlayWithContainer> = new Map();

  constructor(
    private overlay: Overlay,
    private overlayService: ToasterContainerOverlayService,
    private cfr: ComponentFactoryResolver,
    @Inject(DOCUMENT) private document: any
  ) {}

  get(position: ToastPosition): ToasterContainer {
    const logicalPosition: ToastLogicalPosition = this.toLogicalPosition(position);
    const overlayWithContainer = this.overlays.get(position);
    if (!overlayWithContainer || !this.existsInDom(overlayWithContainer.toasterContainer)) {
      if (overlayWithContainer) {
        overlayWithContainer.overlayRef.dispose();
      }
      this.instantiateContainer(logicalPosition);
    }

    return this.overlays.get(logicalPosition)!.toasterContainer;
  }

  private instantiateContainer(position: ToastLogicalPosition) {
    const toasterOverlayWithContainer = this.createContainer(position);
    this.overlays.set(position, toasterOverlayWithContainer);
  }

  private createContainer(position: ToastLogicalPosition): ToasterOverlayWithContainer {
    const positionStrategy = this.overlay.position().global().top().right(); // TODO - add customizable positioning. hardcoded to top-right for now
    const ref = this.overlayService.create({ positionStrategy });
    ref.hostElement.setAttribute('class', 'uxg-toaster-overlay-wrapper');
    const containerRef = ref.attach(new ComponentPortal(ToasterContainerComponent, null, null, this.cfr));

    return {
      overlayRef: ref,
      toasterContainer: new ToasterContainer(position, containerRef)
    };
  }

  private existsInDom(toastContainer: ToasterContainer): boolean {
    return this.document.body.contains(toastContainer.nativeElement);
  }

  private toLogicalPosition(position: ToastPosition): ToastLogicalPosition {
    if (Object.values(ToastLogicalPosition).includes(position as ToastLogicalPosition)) {
      return position as ToastLogicalPosition;
    }
    return ToastLogicalPosition.TOP_START; // TODO - remove when handling positioning
  }
}

/**
 * The `ToasterService` provides a capability to build toast notifications.
 *
 * `ToasterService.show(message, config)` accepts two params, config is optional.
 *
 * ### Import
 *
 * Import `ToasterModule` to your app module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     ToasterModule,
 *   ],
 * })
 * export class AppModule { }
 * ```
 *
 * ### Usage
 *
 * Calling `ToasterService.show(...)` will render new toast and return `ToasterRef` with
 * help of which you may close newly created toast by calling `close` method.
 *
 * ```ts
 * const toastRef: ToasterRef = this.toasterService.show(...);
 * toastRef.close();
 * ```
 *
 * Config accepts following options:
 *
 * `type` - coloring and icon of the toast.
 * Default is `info`.
 *
 * `duration` - the time after which the toast will be destroyed.
 * `0` means endless toast, that may be destroyed by click only.
 * Default is 3000 ms.
 *
 * `position` - determines where on the screen toast will be rendered.
 * Default is `top-end`, hardcoded for now.
 *
 * `destroyByClick` - provides a capability to destroy toast by click.
 * Default is true.
 * */
@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  constructor(
    @Inject(TOASTER_CONFIG) private globalConfig: ToasterConfig,
    private containerRegistry: ToasterContainerRegistry
  ) {}

  /**
   * Shows toast with message and user config.
   * */
  show(message: string, userConfig?: Partial<ToasterConfig>): ToasterRef {
    const config = new ToasterConfig({
      ...this.globalConfig,
      ...userConfig
    });
    const container = this.containerRegistry.get(config.position);
    const toast = { message, config };
    return container.attach(toast);
  }

  /**
   * Shows success toast with message, title and user config.
   * */
  success(message: string, config?: Partial<ToasterConfig>): ToasterRef {
    return this.show(message, { ...config, type: ToastType.SUCCESS });
  }

  /**
   * Shows error toast with message, title and user config.
   * */
  error(message: string, config?: Partial<ToasterConfig>): ToasterRef {
    return this.show(message, { ...config, type: ToastType.ERROR });
  }

  /**
   * Shows warning toast with message, title and user config.
   * */
  warning(message: string, config?: Partial<ToasterConfig>): ToasterRef {
    return this.show(message, { ...config, type: ToastType.WARNING });
  }

  /**
   * Shows info toast with message, title and user config.
   * */
  info(message: string, config?: Partial<ToasterConfig>): ToasterRef {
    return this.show(message, { ...config, type: ToastType.INFO });
  }
}
