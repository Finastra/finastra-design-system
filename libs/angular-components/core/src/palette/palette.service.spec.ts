import { TestBed } from '@angular/core/testing';
import { PaletteService } from './palette.service';
import { PALETTE_CONFIG } from './palette.models';
import { PALETTE_DEFAULT_CONFIG } from './palette.defaults';

describe('PaletteService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        {
          provide: PALETTE_CONFIG,
          useValue: PALETTE_DEFAULT_CONFIG
        }
      ]
    })
  );

  it('should be created', () => {
    const service: PaletteService = TestBed.get(PaletteService);
    expect(service).toBeTruthy();
  });

  it('should send updated configuration to all subscribers', () => {
    const service: PaletteService = TestBed.get(PaletteService);
    const observer = jest.fn();
    const subscription = service.paletteChange$.subscribe(observer);

    expect(observer).toBeCalledWith(PALETTE_DEFAULT_CONFIG);

    subscription.unsubscribe();
  });

  it('should send updated configuration to all subscribers', () => {
    const service: PaletteService = TestBed.get(PaletteService);
    const observer = jest.fn();
    const subscription = service.paletteChange$.subscribe(observer);

    const newConfig = {
      colorScale: [],
      vectorMap: {
        marker: {
          line: {
            color: '#ff0000',
            width: 1
          }
        }
      }
    };

    service.changePalette(newConfig);

    expect(observer).toHaveBeenCalledTimes(2);
    expect(observer).toHaveBeenCalledWith(newConfig);

    subscription.unsubscribe();
  });
});
