import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants, getTokenId } from 'src/app/global';

@Component({
  selector: 'app-driver-page',
  templateUrl: './driver-page.component.html',
  styleUrls: ['./driver-page.component.scss']
})
export class DriverPageComponent {
  public churchId: string = '5b8c73d3-9e6a-4b8c-b44c-6637132ec60e'

  public headers: any = null;
  public options: any = null;

  public churchInfo: any = null;
  public guestRideRequests: any = null;
  public userRideRequests: any = null;
  
  constructor(private http: HttpClient,
              private cookieService: CookieService,) {}

  ngOnInit() {    
    this.headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': getTokenId(this.cookieService.get("adminToken"))
    });

    this.options = { headers: this.headers };

    this.http.get(GlobalConstants.GETChurchObject + this.churchId).subscribe((response) => {
      this.churchInfo = response;
    });
    
    this.http.get(GlobalConstants.GETGuestRideRequests, this.options).subscribe((response) => {
      this.guestRideRequests = response;
    });
    
    this.http.get(GlobalConstants.GETUserRideRequests, this.options).subscribe((response) => {
      this.userRideRequests = response;
    });
  }

  // TODO: finish this once Jacob adds patch api call
  onAcceptRideRequest(rideRequest: any) {
    return
    // let url = GlobalConstants.PATCHRideRequest
    // let formattedData = {
    //   "accepted by": data.username,
    // }
    // this.http.patch(url, formattedData, this.options).subscribe(
    //   (response) => {
    //     console.log(response); 
    //     location.reload();  
    //   },
    //   (error) => console.log(error)
    // )
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
