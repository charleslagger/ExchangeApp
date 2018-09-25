import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComposerRestService } from './service/composer-rest-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'exchange-app';
// }

export class AppComponent implements OnInit {
  title = 'exchange-app';
  private authenticated = false;
  private loggedIn = false;
  private currentUser;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private restService: ComposerRestService) {
  }

  private signUpInProgress = false;
  @ViewChild('signupForm') signupForm;
  private signUp = {
    id: '',
    firstName: '',
    surname: '',
  };

  ngOnInit() {
    this.route
      .queryParams
      .subscribe((queryParams) => {
        const loggedIn = queryParams['loggedIn'];
        if (loggedIn) {
          console.log('Already login: ' + loggedIn);
          this.authenticated = true;
          return this.router.navigate(['/'])
            .then(() => {
              return this.checkWallet();
            });
        }
      });
  }

  checkWallet() {
    return this.restService.checkWallet()
      .then((results) => {
        console.log('Result of check wallet: ' + JSON.stringify(results));
        if (results['length'] > 0) {
          this.loggedIn = true;
          return this.getCurrentUser();
            // .then(() => {
            //   this.congaName = this.CONGAS[this.getRandomIntInclusive(0, this.CONGAS.length - 1)];
            //   return this.getAvailablePenguins();
            // })
            // .then(() => {
            //   return this.getMyPenguins();
            // });
        }
      });
  }

  onSignUp() {
    this.signUpInProgress = true;
    return this.restService.signUp(this.signUp)
      .then(() => {
        return this.getCurrentUser();
      })
      .then(() => {
        this.loggedIn = true;
        this.signUpInProgress = true;
        console.log('Sign up done');
      });
  }

  getCurrentUser() {
    return this.restService.getCurrentUser()
      .then((currentUser) => {
        this.currentUser = currentUser;
      });
  }

}
