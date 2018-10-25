import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule
  , MatCardModule
  , MatCheckboxModule
  , MatDialogModule
  , MatFormFieldModule
  , MatIconModule, MatListModule
  , MatProgressSpinnerModule
  , MatToolbarModule
  , MatTooltipModule
  , MatInputModule
  , MatSlideToggleModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule
    , MatButtonModule
    , MatCheckboxModule
    , MatToolbarModule
    , MatIconModule
    , MatTooltipModule
    , MatProgressSpinnerModule
    , MatCardModule
    , MatDialogModule
    , MatListModule
    , MatFormFieldModule
    , MatInputModule
    , MatSlideToggleModule
  ]
  , exports: [
    MatButtonModule
    , MatCheckboxModule
    , MatToolbarModule
    , MatIconModule
    , MatTooltipModule
    , MatProgressSpinnerModule
    , MatCardModule
    , MatDialogModule
    , MatListModule
    , MatFormFieldModule
    , MatInputModule
    , MatSlideToggleModule
  ]
})
export class MaterialModule { }
