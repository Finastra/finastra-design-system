import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatCardModule,
  MatChipsModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatInputModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatMenuModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatRadioModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatMenuModule
  ]
})
export class MaterialModule {}
