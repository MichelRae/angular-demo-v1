import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";
import {JWT} from "../../models/jwt.model";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private router: Router) {}

  logout() {
    // we remove the token
    localStorage.removeItem('jwt');

    // redirect user to login or home
    this.router.navigateByUrl('/');
    // this.router.navigateByUrl('/login');

    //TODO: implement a guard for protecting routes
  }
}
