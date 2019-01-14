import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from 'src/app/services/auth/auth-firebase.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public auth: AuthFirebaseService) { }

  ngOnInit() {
  }

}
