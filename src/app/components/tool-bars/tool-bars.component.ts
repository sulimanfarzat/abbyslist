import { Component, OnInit, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tool-bars',
  templateUrl: './tool-bars.component.html',
  styleUrls: ['./tool-bars.component.scss'],
})

export class ToolBarsComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    routeTrigger$: Observable<object>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {

 }

}
