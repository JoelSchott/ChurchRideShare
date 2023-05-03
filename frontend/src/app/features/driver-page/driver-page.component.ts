import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants, getTokenId } from 'src/app/global';
import { JwtTokenService } from 'src/app/services/jwt-token.service';

@Component({
  selector: 'app-driver-page',
  templateUrl: './driver-page.component.html',
  styleUrls: ['./driver-page.component.scss']
})
export class DriverPageComponent {
  public churchId: any = null;
  public username: any = null;

  public headers: any = null;
  public options: any = null;

  public churchInfo: any = null;
  public guestRideRequests: any = null;
  public userRideRequests: any = null;
  
  constructor(private http: HttpClient,
              private jwtService: JwtTokenService,
              private cookieService: CookieService,) {}

  ngOnInit() {
    this.jwtService.setToken(this.cookieService.get("driverToken"));
    let decodedToken: any = this.jwtService.getDecodeToken()
    this.username = decodedToken['cognito:username']

    console.log('signed in as driver user: ', this.username)
    console.log(this.cookieService.get("driverToken"))

    this.headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': getTokenId(this.cookieService.get("driverToken"))
    });
    this.options = { headers: this.headers };
    console.log('options set')

    this.http.get(GlobalConstants.GETDrivers, this.options).subscribe((response) => {
      console.log(response)
      let res: any = response
      console.log(res[0])
      // this.churchId = res[0]['churchId'];
      this.churchId = 'd0f31d23-cd03-4d72-8d2e-934ccd980071'
      console.log('church id set: ', this.churchId)

      this.http.get(GlobalConstants.GETChurchObject + this.churchId).subscribe(
        (response) => {
          console.log('church retrieved', response)
          this.churchInfo = response;
        },
        (error) => console.log(error)
      );
      
      // this.http.get(GlobalConstants.GETUserRideRequests, this.options).subscribe(
      //   (response) => {
      //     console.log(response)
      //     this.userRideRequests = response;
      //   },
      //   (error) => console.log(error)
      // );
      
      this.http.get(GlobalConstants.GETGuestRideRequests, this.options).subscribe(
        (response) => {
          console.log(response)
          this.guestRideRequests = response;
        },
        (error) => console.log(error)
      );
    },
    (error) => console.log(error)
    );
  }

  // TODO: finish this once Jacob adds patch api call
  onAcceptUserRideRequest(rideRequestId: any) {
    let url = GlobalConstants.PATCHUserRideRequests + rideRequestId;
    let formattedData = {
      "acceptedBy": this.username,
    }
    this.http.patch(url, formattedData, this.options).subscribe(
      (response) => {
        console.log(response); 
        location.reload();  
      },
      (error) => console.log(error)
    )
  }

  onAcceptGuestRideRequest(rideRequestId: any) {
    let url = GlobalConstants.PATCHGuestRideRequest + rideRequestId;
    let formattedData = {
      "acceptedBy": this.username,
    }
    this.http.patch(url, formattedData, this.options).subscribe(
      (response) => {
        console.log(response); 
        location.reload();  
      },
      (error) => console.log(error)
    )
  }

  // Show the user the same tab they were previously on after page reload
  setActiveTab(activeTab: any) {
    localStorage.setItem("activeTab", activeTab);
  };
  
  isActiveTab(tabName: any) {
    var activeTab = localStorage.getItem("activeTab") || "overview";
    return (activeTab === tabName);
  };
}
