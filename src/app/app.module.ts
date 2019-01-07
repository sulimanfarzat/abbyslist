import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import 'hammerjs';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';
import { OverlayModule } from '@angular/cdk/overlay';


// services
import { PathResolveService } from './services/path-resolve.service';
import { FilePreviewOverlayService } from './services/overlay/file-preview-overlay.service';
import { ApiGeocodService } from './services/APIs/api-geocod.service';

// components
import { ToolBarsComponent } from './components/tool-bars/tool-bars.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { AngularMaterialModule } from './module/material-module';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SellComponent } from './components/sell/sell.component';
import { FooterComponent } from './components/footer/footer.component';

const googleMapsParams = {
  apiKey: environment.GOOGLE_MAPS_API_KEY,
  libraries: ['places'] ,
  // language: 'en',
  // region: 'DE'
};

@NgModule({

  imports: [
    BrowserModule.withServerTransition({appId: 'abbys-list'}),
    BrowserAnimationsModule,
    FormsModule,
    OverlayModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    MatGoogleMapsAutocompleteModule.forRoot(),
    AgmCoreModule.forRoot(googleMapsParams),
    StoreModule.forRoot(reducers, { metaReducers }),
  ],

  declarations: [
    AppComponent,
    NavBarComponent,
    AddressFormComponent,
    ToolBarsComponent,
    NotFoundComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    SignInComponent,
    SellComponent,
    FooterComponent
  ],

  providers: [
    PathResolveService,
    FilePreviewOverlayService,
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer},
    ApiGeocodService
  ],

  entryComponents: [ SignInComponent, SellComponent ],

  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}


