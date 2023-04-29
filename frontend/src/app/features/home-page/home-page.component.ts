import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { JwtTokenService } from 'src/app/services/jwt-token.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private authStorageService: LocalStorageService,
              private jwtService: JwtTokenService,) { }

  ngOnInit(): void {
    this.checkForToken();
  }
  
  // For Rider log in
  checkForToken(){
    this.route.fragment.subscribe((fragment) => {
      if(fragment){
        this.authStorageService.set("riderToken", fragment);
        this.jwtService.setToken(fragment);
        console.log(this.jwtService.getDecodeToken());
        console.log(this.jwtService.getUsername());
        console.log(this.jwtService.isTokenExpired());
      }
    })
  }

}
