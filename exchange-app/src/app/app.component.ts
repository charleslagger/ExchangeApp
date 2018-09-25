import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe((queryParams) => {
        const loggedIn = queryParams['loggedIn'];
        if (loggedIn) {
        console.log('Already login: ' + loggedIn);
        this.authenticated = true;
        return this.router.navigate(['/']);
        //   .then(() => {
        //     return this.checkWallet();
        //   });
        }
      });
  }

}
