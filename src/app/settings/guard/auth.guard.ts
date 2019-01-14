import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFirebaseService } from 'src/app/services/auth/auth-firebase.service';
import { take, map, tap } from 'rxjs/operators';
import { FilePreviewOverlayRef } from 'src/app/services/overlay/file-preview-overlay-ref';
import { FilePreviewOverlayService } from 'src/app/services/overlay/file-preview-overlay.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthFirebaseService, private router: Router,
    private previewDialog: FilePreviewOverlayService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.auth.user$.pipe(
      take(1),
      map(user => !!user), // <-- map to boolean
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
          // this.router.navigate(['/login']);
          this.showPreview();
        }
      })
    );

  }

  showPreview() {
    const dialogRef: FilePreviewOverlayRef = this.previewDialog.open();
  }

}
