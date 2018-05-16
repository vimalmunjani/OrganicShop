import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  appUser: AppUser;

  constructor(private auth: AuthService) {
    this.auth.appUser$.subscribe(user => {
      this.appUser = user;
    });
  }

   logout() {
     this.auth.logout();
   }
}
