import { Component } from '@angular/core';
import { ColorEvent, RGB, RGBA } from 'ngx-color';

@Component({
  selector: 'ffdc-theme-builder-demo',
  templateUrl: './theme-builder-demo.component.html',
  styleUrls: ['./theme-builder-demo.component.scss']
})
export class ThemeBuilderComponent {
  colorShift = 150;
  statePrimary = '0, 158, 224';
  stateSecondary = '16, 71, 224';

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

  private isDark(rgb: RGB | RGBA) {
    // YIQ equation from http://24ways.org/2010/calculating-color-contrast
    const { r, g, b } = rgb;
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq < 128;
  }

  private textContrastOnBackground(color: RGB | RGBA, variable: string) {
    if (this.isDark(color)) {
      document.documentElement.style.setProperty(variable, '255, 255, 255');
    } else {
      document.documentElement.style.setProperty(variable, '65, 65, 65');
    }
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

    const gradient = `rgba(${this.rgbStringFrom($event.color.rgb)}, 1), rgba(${this.stateSecondary})`;
    document.documentElement.style.setProperty('--gradient-vertical', gradient);
    document.documentElement.style.setProperty('--gradient-horizontal', gradient);

    this.textContrastOnBackground($event.color.rgb, '--text-color-primary');

    this.statePrimary = this.rgbStringFrom($event.color.rgb);
  }

  changeSecondaryComplete($event: ColorEvent) {
    document.documentElement.style.setProperty('--color-secondary', this.rgbStringFrom($event.color.rgb));

    const gradient = `rgba(${this.statePrimary}), rgba(${this.rgbStringFrom($event.color.rgb)}, 1)`;
    document.documentElement.style.setProperty('--gradient-vertical', gradient);
    document.documentElement.style.setProperty('--gradient-horizontal', gradient);

    this.textContrastOnBackground($event.color.rgb, '--text-color-secondary');

    this.stateSecondary = this.rgbStringFrom($event.color.rgb);
  }
}
