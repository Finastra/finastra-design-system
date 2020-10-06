import { Component } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'ffdc-theme-builder-demo',
  templateUrl: './theme-builder-demo.component.html',
  styleUrls: ['./theme-builder-demo.component.scss']
})
export class ThemeBuilderComponent {
  state = '105, 78, 214';
  constructor() {}

  changeComplete($event: ColorEvent) {
    console.log($event);
    document.documentElement.style.setProperty(
      '--color-primary',
      $event.color.rgb.r + ',' + $event.color.rgb.g + ',' + $event.color.rgb.b
    );
    //document.documentElement.style.setProperty("--color-primary-100", $event.color.rgb.r+', '+$event.color.rgb.g+', '+$event.color.rgb.b);
  }
}
