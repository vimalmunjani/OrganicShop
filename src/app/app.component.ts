import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 constructor(
    private auth: AuthService,
    private router: Router
  ) {

    auth.user$.subscribe(user => {
      if (user) {
        const returnUrl = localStorage.getItem('returnUrl');
        this.router.navigateByUrl(returnUrl);
      }
    });

  }
}
