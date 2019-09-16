import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RepeaterCardExampleComponent } from './components/repeater-demo/repeater-card-example/repeater-card-example.component';
import { RepeaterCardAdvancedExampleComponent } from './components/repeater-demo/repeater-card-advanced-example/repeater-card-advanced-example.component';
import { MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, RepeaterCardExampleComponent, RepeaterCardAdvancedExampleComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, AppRoutingModule, MatMenuModule],
  providers: [],
  exports: [RepeaterCardExampleComponent],
  entryComponents: [RepeaterCardExampleComponent, RepeaterCardAdvancedExampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
