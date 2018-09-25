import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private authenticated = false;
  private loggedIn = false;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // const param1 = this.route.snapshot.paramMap.get('loggedIn');
    // console.log('Here: ' + param1);
    // // this.route.queryParamMap
    // //             .map((params: Params) => params.params)
    // //             .subscribe( (params) => {
    // //                  if(params && params['test']){
    // //                     let testQueryParamVal = params['test'];
    // //                  }
    // //              });
  }

}
