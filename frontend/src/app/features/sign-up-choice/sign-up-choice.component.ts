import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalConstants } from 'src/app/global';
import { JwtTokenService } from 'src/app/services/jwt-token.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'sign-up-choice',
  templateUrl: './sign-up-choice.component.html',
  styleUrls: ['./sign-up-choice.component.scss']
})
export class SignUpChoiceComponent implements OnInit {
  public riderUrl: string= GlobalConstants.riderSignUpCognitoUrl;
  public driverUrl: string= GlobalConstants.driverSignUpCognitoUrl;
  public churchUrl: string= GlobalConstants.churchSignUpCognitoUrl;

  constructor(private route: ActivatedRoute, 
              private jwtService: JwtTokenService,
              private cookieService: CookieService,) { }

  ngOnInit(): void {
    this.checkForUrlToken();
  }

  checkForUrlToken(){
    this.route.fragment.subscribe((fragment) => {
      if(fragment){
        // Saving token in cookies allows to retrieve token even after page refresh
        this.cookieService.set("driverToken", fragment);
      }
    })

    // Works after page refresh (if given token in url)
    this.jwtService.setToken(this.cookieService.get("driverToken"));
    // Prints token
    if(this.cookieService.get("driverToken")) console.log(this.jwtService.getDecodeToken());
  }

}
