import { Component, OnInit } from '@angular/core';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { Title } from '@angular/platform-browser';
import { AdminCheckService } from 'src/app/services/admin-check.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLoggedIn = false;
  isAdmin = false;
  user;
  // eslint-disable-next-line prettier/prettier
  constructor(private titleService: Title, private admin: AdminCheckService, private route: ActivatedRoute, private router: Router) {
    // this.titleService.setTitle('Login | OVVisuals');
  }

  ngOnInit() {
    this.renderAccInfo();
  }


  renderAccInfo() {
    const self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      const loginIMG = `<svg id='logoutImg' width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-person-circle"
      fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
      <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path fill-rule="evenodd"
          d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
  </svg>`;
      if (user) {
        // User is signed in.
        self.userLoggedIn = true;
        self.user = user;
        const displayName = user.displayName || 'Guest';
        const email = user.email || '';
        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const uid = user.uid;
        const phoneNumber = user.phoneNumber;
        const providerData = user.providerData;
        user.getIdToken().then(function(accessToken) {
          const a = JSON.stringify({
            displayName,
            email,
            emailVerified,
            phoneNumber,
            photoURL,
            uid,
            accessToken,
            providerData
          }, null, '  ');
        });
        firebase.database().ref('Admin/' + user.uid).once('value', (data) => {
          if (data.val()) {
            self.isAdmin = true;
            self.router.navigate(['../admin'], { relativeTo: this.route });
          }
        });
      } else {
        self.user = '';
        self.userLoggedIn = false;
        // document.getElementById('login').innerHTML = loginIMG;
        // document.getElementById('logoutImg').style.fill = 'black';
        const uiConfig = {
          signInSuccessUrl: '/login',
          signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,

          ],
          tosUrl: '/terms',
          privacyPolicyUrl() {
            window.location.assign('/privacy');
          }
        };
        try {
          const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
          ui.start('#firebaseui-auth-container', uiConfig);
        } catch (e) {
        }
      }
    }, function() {
      //
    });
  }
}

