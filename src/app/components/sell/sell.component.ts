import { Component, OnInit, ViewChild, ElementRef, AfterContentChecked, AfterContentInit, Directive, Renderer } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StepperSelectionEvent, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepper, MatStepHeader } from '@angular/material';
import { NgClass } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class SellComponent implements OnInit , AfterContentInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([
    Breakpoints.Handset,
    Breakpoints.TabletPortrait,
  ])
    .pipe(
      map(result => result.matches)
    );

  sellHome: {[key: string]: any} = [
    {
      'iam': {
        'owner' : 'Owner',
        'renter' : 'Renter',
      },
      'iwant': {
        'owner': ['Rent', 'Sell'],
        'renter' : ['apartment', 'House', 'Shared Room', 'furnished real estate', 'car park / Garege'],
        'iSell': ['apartment', 'House', 'Land', 'investment', 'commercial objects'],
        'iRent': ['apartment', 'House', 'Shared Room', 'furnished real estate', 'car park / Garege']
      }
    }
  ];

  isValid = true;
  hideOwner = true;
  hideRenter = true;
  hideStep1 = true; // scss class hide
  @ViewChild('stepper') public stepper: MatStepper;
  @ViewChild('stepper') public stepHeader: MatStepHeader;

  constructor( private breakpointObserver: BreakpointObserver ) {
}

  ngOnInit() {
  }

  ngAfterContentInit () {
}


  stepperOnClick(event) {
    // console.log(event);
    // if (event.selectedIndex === 0) {
    //   this.hideOwner = true;
    //   this.hideRenters = true;
    // }
    switch (event.selectedIndex) {
      case 0: this.hideStep1 = true;
              this.hideOwner = true;
              this.hideRenter = true;
        break;

      default: this.hideStep1 = false;
        break;
    }
  }

  choiseStepper() {
    this.hideOwner = false;
    this.stepper.selectedIndex = 1;
    // this.test = this.stepHeader;
    // this._renderer.setElementProperty(this._elemRef.nativeElement, 'innerHTML', 'my new content');

    // const stp = document.querySelector('mat-step-header');
    // stp.className = 'hidden';
  }


     changeValue(item) {
        console.log(item);
        if (item === 'Rent') {
          this.hideRenter = true;
          this.hideOwner = false;
          console.log('this.hideRenter ' , this.hideRenter );
          console.log('this.hideOwner ' , this.hideOwner );
        } else {
          this.hideOwner = true;
          this.hideRenter = false;
          console.log('this.hideRenter ' , this.hideRenter );
          console.log('this.hideOwner ' , this.hideOwner );
        }
     }




}
