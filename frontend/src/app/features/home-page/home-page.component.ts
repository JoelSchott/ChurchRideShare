import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtTokenService } from 'src/app/services/jwt-token.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private jwtService: JwtTokenService,
              private cookieService: CookieService,
              private _router: Router,) { }

  ngOnInit(): void {
    this.checkForUrlToken();
  }
  
  checkForUrlToken(){
    this.route.fragment.subscribe((fragment) => {
      if(fragment){
        // Saving token in cookies allows to retrieve token even after page refresh
        this.cookieService.set("userToken", fragment, {path: '/'});
        this._router.navigateByUrl('/home').then(() => {
          window.location.reload();
        });
      }
    })

    // Works after page refresh (if given token in url)
    console.log("User:");
    this.jwtService.setToken(this.cookieService.get("userToken"));
    if(this.cookieService.get("userToken")) console.log(this.jwtService.getDecodeToken());
    console.log(this.cookieService.get("userToken"));
    
    console.log("Driver:");
    this.jwtService.setToken(this.cookieService.get("driverToken"));
    if(this.cookieService.get("driverToken")) console.log(this.jwtService.getDecodeToken());
    console.log(this.cookieService.get("driverToken"));

    console.log("Admin:");
    this.jwtService.setToken(this.cookieService.get("adminToken"));
    if(this.cookieService.get("adminToken")) console.log(this.jwtService.getDecodeToken());
    console.log(this.cookieService.get("adminToken"));

  }

}
