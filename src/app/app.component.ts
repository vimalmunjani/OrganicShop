import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService
  ) {

    auth.user$.subscribe(user => {
      if (user) {

        userService.save(user);

        const returnUrl = localStorage.getItem('returnUrl');

        if (returnUrl) {

          localStorage.removeItem('returnUrl');
          router.navigateByUrl(returnUrl);

        }
      }
      // else {
      //   router.navigateByUrl('/');
      // }
    });

  }
}
