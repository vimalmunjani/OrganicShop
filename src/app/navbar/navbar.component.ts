import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public auth: AuthService) { }

   logout() {
     this.auth.logout();
   }
}
