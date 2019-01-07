import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
  //   .pipe(
  //     map(result => result.matches)
  //   );
  // isTablet$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.HandsetLandscape])
  //     .pipe(
  //       map(result => result.matches)
  //     );

  // forms
  signInForm = this.fb.group({
    email: [null, Validators.compose([
      Validators.required, Validators.email])
    ],
    password: [null, Validators.compose([
      Validators.required, Validators.min(8)])
    ],
  });
  signUpForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.compose([
      Validators.required, Validators.email])
    ],
    password: [null, Validators.compose([
      Validators.required, Validators.min(8)])
    ],
  });

  matcher = new MyErrorStateMatcher();
  hasUnitNumber = false;
  hide = true;

  constructor(private fb: FormBuilder,
              private breakpointObserver: BreakpointObserver) {  }

  ngOnInit() {

  }

  onSignIn(): void {
    if (this.signInForm.valid) {
      alert('Thanks! signInForm');
      console.log(this.signInForm.value);
    }
  }

  onSignUp(): void {
    if (this.signUpForm.valid) {
      alert('Thanks! signUpForm');
      console.log(this.signUpForm.value);
    }
  }




}
