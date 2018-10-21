import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule
  , MatCardModule
  , MatCheckboxModule
  , MatDialogModule
  , MatIconModule, MatListModule
  , MatProgressSpinnerModule
  , MatToolbarModule
  , MatTooltipModule
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
  ]
})
export class MaterialModule { }
