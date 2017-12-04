import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ObservatoryMaterialModule} from './modules/material/observatory-material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ObservatoryMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
