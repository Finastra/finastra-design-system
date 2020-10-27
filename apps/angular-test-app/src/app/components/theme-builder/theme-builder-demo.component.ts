import { Component } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'ffdc-theme-builder-demo',
  templateUrl: './theme-builder-demo.component.html',
  styleUrls: ['./theme-builder-demo.component.scss']
})
export class ThemeBuilderComponent {
  colorShift = 150;
  statePrimary = '0, 158, 224';
  stateSecondary = '16, 71, 224';
  constructor() {}

  private rgbStringFrom(rgbObject: any) {
    return rgbObject.r + ',' + rgbObject.g + ',' + rgbObject.b;
  }

  private changeLuminosity(rgbObject: any, shift: number) {
    const newObject = Object.assign({}, rgbObject);
    Object.keys(newObject).map(function (channel, color) {
      newObject[channel] += shift;
    });
    return newObject;
  }

  changePrimaryComplete($event: ColorEvent) {
    document.documentElement.style.setProperty('--color-primary', this.rgbStringFrom($event.color.rgb));
    document.documentElement.style.setProperty(
      '--color-primary-lighter',
      this.rgbStringFrom(this.changeLuminosity($event.color.rgb, this.colorShift))
    );
    document.documentElement.style.setProperty(
      '--color-primary-darker',
      this.rgbStringFrom(this.changeLuminosity($event.color.rgb, -this.colorShift))
    );
    document.documentElement.style.setProperty('--gradient-stop-1', $event.color.hex);
    document.documentElement.style.setProperty('--gradient-stop-2', $event.color.hex);
    //document.documentElement.style.setProperty("--color-primary-100", $event.color.rgb.r+', '+$event.color.rgb.g+', '+$event.color.rgb.b);
  }

  changeSecondaryComplete($event: ColorEvent) {
    document.documentElement.style.setProperty('--color-secondary', this.rgbStringFrom($event.color.rgb));
    document.documentElement.style.setProperty('--gradient-stop-3', $event.color.hex);
    document.documentElement.style.setProperty('--gradient-stop-3-vert', $event.color.hex);
    document.documentElement.style.setProperty('--gradient-stop-4', $event.color.hex);
  }
}
