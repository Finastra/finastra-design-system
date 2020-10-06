import { TestBed } from '@angular/core/testing';
import { ToasterService, ToasterContainerRegistry, ToasterContainerOverlayService } from './toaster.service';
import { TOASTER_CONFIG, ToasterConfig } from './toaster.config';
import { InjectionToken } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ToasterContainerComponent } from './toaster-container.component';
import { ToasterModule } from './toaster.module';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconRegistry } from '@angular/material/icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ToasterService', () => {
  let service: ToasterService;
  let overlayService: ToasterContainerOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToasterModule, BrowserAnimationsModule, HttpClientTestingModule],
      providers: [
        { provide: TOASTER_CONFIG, value: new InjectionToken<ToasterConfig>('Default toaster config') },
        ToasterContainerRegistry,
        Overlay,
        ToasterContainerOverlayService,
        MatIconRegistry
      ]
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: {
          entryComponents: [ToasterContainerComponent]
        }
      })
      .compileComponents();

    service = TestBed.inject(ToasterService);
    overlayService = TestBed.inject(ToasterContainerOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show success toast', () => {
    const spy = jest.spyOn(service, 'show');
    service.success('success');
    expect(spy).toHaveBeenCalledWith('success', { type: 'success' });
  });

  it('should show error toast', () => {
    const spy = jest.spyOn(service, 'show');
    service.error('error');
    expect(spy).toHaveBeenCalledWith('error', { type: 'error' });
  });

  it('should show warning toast', () => {
    const spy = jest.spyOn(service, 'show');
    service.warning('warning');
    expect(spy).toHaveBeenCalledWith('warning', { type: 'warning' });
  });

  it('should show info toast', () => {
    const spy = jest.spyOn(service, 'show');
    service.info('info');
    expect(spy).toHaveBeenCalledWith('info', { type: 'info' });
  });

  it('should create toaster overlay', () => {
    expect(overlayService.create().getConfig().panelClass).toEqual('uxg-toaster-overlay');
  });

  it('should return overlay scroll strategy', () => {
    expect(overlayService.scrollStrategies).toBeTruthy();
  });
});
