import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
// import { HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { ApiGeocodService } from 'src/app/services/APIs/api-geocod.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
// import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    // animation triggers go here
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {


  title = 'My first AGM project';
  lat = 52.5095656;
  lng = 13.3216809;

  // animation
  isOpen = true;

  RowHeight = '100px';
  public searchRealEstate = false;
  public searchCars = false;
  public buttonRealEstate = 'Search Real Estate';
  public buttonCars = 'Search Cars';

  myControl = new FormControl();
  options: any[];

  constructor(private api: ApiGeocodService) { }


  ngOnInit() {
    // this.api.loadGeocod().subscribe(
    //   val => {this.options = val['results'][0]['address_components'];   console.log(val['results'][0]['address_components']); }
    // );
  }




  // animation
  toggle() {
    this.isOpen = !this.isOpen;
  }


  toggleToSearchRealEstate() {
    this.searchRealEstate = !this.searchRealEstate;
    this.searchCars = false;
    this.buttonCars = 'Search Cars is hidden';
    // this.RowHeight = '50px';
    // CHANGE THE NAME OF THE BUTTON.
    if (this.searchRealEstate) {
      this.buttonRealEstate = 'Hide Search Real Estate';
    } else {
      this.buttonRealEstate = 'Search Real Estate';
    }
  }
  toggleToSearchCars() {
    this.searchCars = !this.searchCars;
    this.searchRealEstate = false;
    this.buttonRealEstate = 'Search Real Estate is hidden';
    // this.RowHeight = '100px';
    // CHANGE THE NAME OF THE BUTTON.
    if (this.searchCars) {
      this.buttonCars = 'Hide Search Cars';
    } else {
      this.buttonCars = 'Search Cars';
    }
  }


}
