import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/observable';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router) {
    this.user$ = afAuth.authState;
   }

  login() {

    const returnurl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnurl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
