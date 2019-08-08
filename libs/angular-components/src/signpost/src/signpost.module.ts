import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignpostComponent } from './signpost.component';
import {MatIconModule} from "@angular/material";
import {MatButtonModule} from "@angular/material/";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [SignpostComponent],
  exports: [SignpostComponent]
})
export class SignpostModule {}
