import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtTokenService } from 'src/app/services/jwt-token.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

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
        this.cookieService.set("userToken", fragment);
      }
    })

    // Works after page refresh (if given token in url)
    this.jwtService.setToken(this.cookieService.get("userToken"));
    // Prints token
    if(this.cookieService.get("userToken")) console.log(this.jwtService.getDecodeToken());
  }

}
