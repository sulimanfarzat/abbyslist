import { Component, OnInit, ViewChild, ElementRef, AfterContentChecked, AfterContentInit, Directive, Renderer } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatStepper, MatStepHeader } from '@angular/material';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit , AfterContentInit {

  sellHome: {[key: string]: any} = [
    {
      'iam': {
        'owner' : 'Owner',
        'renter' : 'Renter',
      },
      'iwant': {
        'owner': ['Rent', 'Sell'],
        'renter' : ['apartment', 'House', 'Shared Room', 'furnished real estate', 'car park / Garege'],
        'iSell': ['apartment', 'House', 'Shared Room'],
        'iRent': ['apartment', 'House', 'Shared Room', 'xxxxxx', 'xxxx']
      }
    }
  ];

  isValid = true;
  hideOwner = true;
  hideRenter = true;
  hideLast = true ;
  hideStep1 = true; // scss class hide
  @ViewChild('stepper') public stepper: MatStepper;
  @ViewChild('stepper') public stepHeader: MatStepHeader;

  constructor(private _elemRef: ElementRef, private _renderer: Renderer) {
    // this._renderer.setElementProperty(this._elemRef.nativeElement, 'innerHTML', 'my new content');
}

  ngOnInit() {
  }

  ngAfterContentInit () {
    // you can get to the element content here
    //  this.el.nativeElement = '';
    // console.log('headrr: ' , this._elemRef.nativeElement.innerHTML , this._renderer);
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
      // case 1: this.hideOwner = false; this.hideRenters = false;
        // break;

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
        } else {
          this.hideOwner = true;
          this.hideRenter = false;
        }
     }




}
