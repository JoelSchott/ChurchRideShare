import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/global';
import { ActivatedRoute } from '@angular/router';
import { JwtTokenService } from 'src/app/services/jwt-token.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in-choice',
  templateUrl: './sign-in-choice.component.html',
  styleUrls: ['./sign-in-choice.component.scss']
})
export class SignInChoiceComponent implements OnInit {
  public riderUrl: string= GlobalConstants.riderSignInCognitoUrl;
  public driverUrl: string= GlobalConstants.driverSignInCognitoUrl;
  public churchUrl: string= GlobalConstants.churchSignInCognitoUrl;

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
        this.cookieService.set("adminToken", fragment, {path: '/'});
        this._router.navigateByUrl('/account').then(() => {
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
