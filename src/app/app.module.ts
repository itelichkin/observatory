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
import { SpaceObjectsListComponent } from './pages/home-page/space-objects-list/space-objects-list.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';
import { GalaxyComponent } from './pages/home-page/observatory/galaxy/galaxy.component';
import { SpaceSystemComponent } from './pages/home-page/observatory/galaxy/space-system/space-system.component';
import {DataTableModule, DropdownModule, OverlayPanelModule, SharedModule} from 'primeng/primeng';
import { ModifySpaceObjectComponent } from './pages/home-page/space-objects-list/modify-space-object/modify-space-object.component';
import { DeleteAstronomicalObjectComponent } from './dialogs/delete-astronomical-object/delete-astronomical-object.component';
import {DialogService} from './services/dialog.service';
import {AuthTokenService} from './services/auth-token.service';
import {ErrorService} from './services/error.service';
import {HeadersService} from './services/headers.service';
import {HttpClientService} from './services/http-client.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderInterceptor} from './interceptor/header.interceptor';
import { SpinnerComponent } from './spinner/spinner.component';

const HttpInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: HeaderInterceptor,
  multi: true,
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    PageDefaultComponent,
    ObservatoryComponent,
    SpaceObjectsListComponent,
    GalaxyComponent,
    SpaceSystemComponent,
    ModifySpaceObjectComponent,
    DeleteAstronomicalObjectComponent,
    SpinnerComponent
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
    ObservatoryMaterialModule,
    DataTableModule,
    SharedModule,
    OverlayPanelModule,
    DropdownModule,
    HttpClientModule
  ],
  providers: [ApiService, DialogService, AppComponent, AuthTokenService, ErrorService, HeadersService, HttpClientService, HttpInterceptor],
  entryComponents: [DeleteAstronomicalObjectComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
