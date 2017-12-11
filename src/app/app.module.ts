import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import {ObservatoryMaterialModule} from './modules/material/observatory-material.module';
import {ApiService} from './services/api.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageDefaultComponent } from './pages/page-default/page-default.component';
import { ObservatoryComponent } from './pages/home-page/observatory/observatory.component';
import { NewSpaceObjectComponent } from './pages/home-page/new-space-object/new-space-object.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';
import { GalaxyComponent } from './pages/home-page/observatory/galaxy/galaxy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    PageDefaultComponent,
    ObservatoryComponent,
    NewSpaceObjectComponent,
    GalaxyComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ObservatoryMaterialModule
  ],
  providers: [ApiService, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
