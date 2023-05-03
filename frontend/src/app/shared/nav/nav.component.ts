import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public isSignedIn = false;
  public homeLink = "/home";

  constructor(private cookieService: CookieService,) { }

  ngOnInit(): void {
    if(this.cookieService.get("userToken") || this.cookieService.get("driverToken") || this.cookieService.get("adminToken")){
      this.isSignedIn = true;
    }
    else this.isSignedIn = false;

    if(this.cookieService.get("driverToken") || this.cookieService.get("adminToken")) this.homeLink = "/account";
    else this.homeLink = "/home";
  }

  logout(){
    this.isSignedIn = false;
    this.cookieService.deleteAll('/');
    this.homeLink = "/home";
  }

}
