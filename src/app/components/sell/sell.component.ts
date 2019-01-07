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

  hideOwner = true;
  hideRenters = true;
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
    console.log(event);
  }

  choiseStepper() {
    this.hideOwner = false;
    this.stepper.selectedIndex = 1;
    // this.test = this.stepHeader;
    // this._renderer.setElementProperty(this._elemRef.nativeElement, 'innerHTML', 'my new content');

    // const stp = document.querySelector('mat-step-header');
    // stp.className = 'hidden';
  }




}