import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig, ScrollStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { FilePreviewOverlayRef } from './file-preview-overlay-ref';
import { SellComponent } from 'src/app/components/sell/sell.component';


interface FilePreviewDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  maxWidth?: string;
  minWidth?: string;
}

const DEFAULT_CONFIG: FilePreviewDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel',
  maxWidth: '800px',
  // minWidth: '300px',
};

@Injectable({
  providedIn: 'root'
})
export class FilePreviewOverlayService {


  constructor(private overlay: Overlay) { }

  open(config: FilePreviewDialogConfig = {}) {
    // Override default configuration
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(dialogConfig);

    // Instantiate remote control
    const dialogRef = new FilePreviewOverlayRef(overlayRef);

    // Create ComponentPortal that can be attached to a PortalHost
    const filePreviewPortal = new ComponentPortal(SignInComponent);

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(filePreviewPortal);

    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;
  }

  openSell(config: FilePreviewDialogConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };
    const overlayRef = this.createOverlay(dialogConfig);
    const dialogRef = new FilePreviewOverlayRef(overlayRef);
    const userProfilePortal = new ComponentPortal(SellComponent);
    overlayRef.attach(userProfilePortal);
    overlayRef.backdropClick().subscribe(_ => dialogRef.close());
  }

  private createOverlay(config: FilePreviewDialogConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: FilePreviewDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      maxWidth: config.maxWidth,
      // minWidth: config.minWidth,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy,
    });

    return overlayConfig;
  }



}
