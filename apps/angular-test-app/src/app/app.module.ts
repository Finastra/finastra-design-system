import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RepeaterCardExampleComponent } from './components/repeater-demo/repeater-card-example/repeater-card-example.component';
import { RepeaterCardAdvancedExampleComponent } from './components/repeater-demo/repeater-card-advanced-example/repeater-card-advanced-example.component';
import { MatMenuModule } from '@angular/material';
import { RepeaterCardChartExampleComponent } from './components/repeater-demo/repeater-card-chart-example/repeater-card-chart-example.component';

@NgModule({
  declarations: [AppComponent, RepeaterCardExampleComponent, RepeaterCardAdvancedExampleComponent, RepeaterCardChartExampleComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, AppRoutingModule, MatMenuModule],
  providers: [],
  exports: [RepeaterCardExampleComponent],
  entryComponents: [RepeaterCardExampleComponent, RepeaterCardAdvancedExampleComponent, RepeaterCardChartExampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
