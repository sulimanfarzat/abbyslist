import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { Observable } from 'rxjs';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepper, MatStepHeader } from '@angular/material';
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
    // Breakpoints.TabletPortrait,
  ])
    .pipe(
      map(result => result.matches)
    );

  sellHome: {[key: string]: any} = [
    {
      'ihave': {
        'realEstet' : 'Real Estet',
        'car'       : 'Car',
      },
      'iwant': {
        'realEstet': ['Rent', 'Sell'],
        'iSellRealEstet': ['apartment', 'House', 'Land', 'investment', 'commercial objects'],
        'iRentRealEstet': ['apartment', 'House', 'Shared Room', 'furnished real estate', 'car park / Garege'],

        'car' : ['xxx', 'xxx'],
        'iSellCar': ['xx', 'xxxx', 'xxxxxx', 'xxx'],
        'iRentCar': ['xxx', 'xxxx'],
      }
    }
  ];

  isRealEstet = true;
  isCar = true;
  val: string;
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
    // switch (event.selectedIndex) {
    //   case 0: this.hideStep1 = true;
    //     break;
    //   default: this.hideStep1 = false;
    //     break;
    // }
  }

  choiseStepper() {
    // this.hideOwner = false;
    this.stepper.selectedIndex = 1;
    // this.test = this.stepHeader;
    // this._renderer.setElementProperty(this._elemRef.nativeElement, 'innerHTML', 'my new content');

    // const stp = document.querySelector('mat-step-header');
    // stp.className = 'hidden';
  }


     changeValue(item) {
       this.val = item;
        console.log(this.val);
        // if (item === 'Rent') {
        //   this.isRealEstet = false;
        //   console.log('this.hideOwner ' , this.isRealEstet );
        // } else {
        //   this.isRealEstet = true;
        //   console.log('this.hideOwner ' , this.isRealEstet );
        // }
     }




}
