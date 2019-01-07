import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material';
import { FilePreviewOverlayRef } from '../../services/overlay/file-preview-overlay-ref';
import { FilePreviewOverlayService } from '../../services/overlay/file-preview-overlay.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})

export class NavBarComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([
    Breakpoints.Handset,
    Breakpoints.TabletPortrait,
  ])
    .pipe(
      map(result => result.matches)
    );

    routeTrigger$: Observable<object>;

  constructor(private breakpointObserver: BreakpointObserver,
              private previewDialog: FilePreviewOverlayService
              ) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        console.log('hier test screen mobile');
      }
    }); // hier test screen mobile
  }


  ngOnInit() {
  }
  // someMethod() {
  //   this.trigger.openMenu();
  // }

  showPreview() {
    const dialogRef: FilePreviewOverlayRef = this.previewDialog.open();
  }

  showPreviewSellBtn() {
    this.previewDialog.openSell();
  }


}
