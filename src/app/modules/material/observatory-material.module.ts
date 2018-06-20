import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule,
  MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatTableModule, MatPaginatorModule,
  MatSortModule
} from '@angular/material';

@NgModule({
  exports: [
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
    MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule,
    MatGridListModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule,
    MatTooltipModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
    MatTableModule, MatPaginatorModule, MatSortModule
  ]
})
export class ObservatoryMaterialModule { }
