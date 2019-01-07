import { Component, OnInit, ViewChild } from '@angular/core';
import browser from 'browser-detect';
import { slideInAnimation } from './animations/router.animation';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatIconRegistry, MatMenuTrigger } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { environment as env } from '../environments/environment';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AppState} from './core/core.state';
import { selectEffectiveTheme } from './settings/settings.selectors';
import { FilePreviewOverlayRef } from './services/overlay/file-preview-overlay-ref';
import { FilePreviewOverlayService } from './services/overlay/file-preview-overlay.service';
declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})


export class AppComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  themes = [
    { value: 'DEFAULT-THEME', label: 'blue' },
    { value: 'LIGHT-THEME', label: 'light' },
    { value: 'NATURE-THEME', label: 'nature' },
    { value: 'BLACK-THEME', label: 'dark' }
  ];

  isProd = env.production;
  // envName = env.envName;
  // version = env.versions.app;
  // year = new Date().getFullYear();
  logo = require('../assets/images/logo.png');
  // languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn'];
  navigation = [
    { link: 'home', label: 'Home' },
    { link: 'about', label: 'About' },
    { link: 'more', label: 'More' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'Settings' }
  ];

  // isAuthenticated$: Observable<boolean>;
  stickyHeader$: boolean; // Observable<boolean>;
  theme$: string; //  Observable<string>;


  // constructor(overlayContainer: OverlayContainer) {
  //   overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
  // }

  constructor(private iconRegistry: MatIconRegistry,
    public overlayContainer: OverlayContainer,
    private previewDialog: FilePreviewOverlayService,
    private sanitizer: DomSanitizer,
    private store: Store<AppState>
    ) {
      // theme for overlay
      overlayContainer.getContainerElement().classList.add('default-theme');
      // ********* svg icons ***********
      iconRegistry.addSvgIcon(
        'google',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/google.svg'));
      iconRegistry.addSvgIcon(
        'facebook-f',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook-f.svg'));
      iconRegistry.addSvgIcon(
          'logo',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo.svg'));
  }


  ngOnInit(): void {
    this.stickyHeader$ = true ; // this.store.pipe(select(selectSettingsStickyHeader));
    this.theme$ = (this.themes[0].value).toLowerCase() ; // this.store.pipe(select(selectEffectiveTheme));
  }

  showPreview() {
    const dialogRef: FilePreviewOverlayRef = this.previewDialog.open();
  }

  showPreviewSellBtn() {
    this.previewDialog.openSell();
  }




}
