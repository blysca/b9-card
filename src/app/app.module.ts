import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MaterialModule} from "./shared/material/material.module";
import { ListComponent } from './cards/list/list.component';
import { CardComponent } from './cards/card/card.component';
import { MainComponent } from './pages/main/main.component';
import { AddCardComponent } from './pages/add-card/add-card.component';
import { EditCardComponent } from './pages/edit-card/edit-card.component';
import { DetailCardComponent } from './pages/detail-card/detail-card.component';
import {HttpClientModule} from "@angular/common/http";
import { DetailComponent } from './cards/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    MainComponent,
    AddCardComponent,
    EditCardComponent,
    DetailCardComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [DetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
