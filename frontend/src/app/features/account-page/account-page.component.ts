import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { GlobalConstants, getFormattedDay, getFormattedMinutes, getTokenId } from 'src/app/global';
import { JwtTokenService } from 'src/app/services/jwt-token.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  public churchId: any = null;

  public headers: any = null;
  public options: any = null;

  public churchInfo: any = null;
  public churchServices: any = null;
  public guestRideRequests: any = null;
  public userRideRequests: any = null;
  public churchAdmins: any = null;
  public churchDrivers: any = null;
  
  constructor(private http: HttpClient, 
              private jwtService: JwtTokenService,
              private cookieService: CookieService,) {}

  ngOnInit() {
    let decodedToken: any = this.jwtService.getDecodeToken()
    let username: any = decodedToken['cognito:username']
    console.log('signed in as admin user: ', username)

    this.http.get(GlobalConstants.GETAdminsByUsername + username).subscribe((response) => {
      let res: any = response
      this.churchId = res[0]['churchId'];
      console.log('church id set: ', this.churchId)
    });
    
    this.headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': getTokenId(this.cookieService.get("adminToken"))
    });

    this.options = { headers: this.headers };

    this.http.get(GlobalConstants.GETChurchObject + this.churchId).subscribe((response) => {
      this.churchInfo = response;
    });

    this.http.get(GlobalConstants.GETChurchServices + this.churchId).subscribe((response) => {
      this.churchServices = response;

      for (let service of this.churchServices) {
        const minutes = service.startTime;
        service.startTime = getFormattedDay(minutes);
      }
    });

    this.http.get(GlobalConstants.GETAdminsByChurchId + this.churchId, this.options).subscribe((response) => {
      this.churchAdmins = response;
    });

    this.http.get(GlobalConstants.GETDriversByChurchId + this.churchId, this.options).subscribe((response) => {
      this.churchDrivers = response;
    });
    
    this.http.get(GlobalConstants.GETGuestRideRequests, this.options).subscribe((response) => {
      this.guestRideRequests = response;
    });
    
    this.http.get(GlobalConstants.GETUserRideRequests, this.options).subscribe((response) => {
      this.userRideRequests = response;
    });
  }

  onChurchInfoSubmit(data: any) {
    let url = GlobalConstants.PATCHChurchObject + this.churchId;
    let formattedData = {
      "name": data.name,
      "state": data.state,
      "city": data.city,
      "street": data.street,
      "zipCode": data.zipCode,
      "description": data.description,
      "website": data.website,
    }

    this.http.patch(url, formattedData, this.options).subscribe(
      (response) => {
        console.log(response); 
        location.reload();  
      },
      (error) => console.log(error)
    )
  }

  onAddServiceSubmit(data: any) {
    let url = GlobalConstants.POSTService;
    let formattedData = {
      "church_id": this.churchId,
      "start_time": getFormattedMinutes(data.day, data.time),
      "description": data.name,
    }
    
    this.http.post(url, formattedData, this.options).subscribe(
      (response) => {
        console.log(response); 
        location.reload();  
      },
      (error) => console.log(error)
    )
  }

  onDeleteService(serviceId: any) {
    let url = GlobalConstants.DELETEService + serviceId
    this.http.delete(url, this.options).subscribe(
      (response) => {
        console.log(response); 
        location.reload();  
      },
      (error) => console.log(error)
    );
  }

  onAddAdminSubmit(data: any) {
    let url = GlobalConstants.POSTAdmins;
    let formattedData = {
      "church_id": this.churchId,
      "username": data.username,
    }
    
    this.http.post(url, formattedData, this.options).subscribe(
      (response) => {
        console.log(response); 
        location.reload();  
      },
      (error) => {
        console.log(error);
        if (error.status === 500 && error.error.error.includes("1452")) { // 1452 is the error code for the fk constraint failing in MySQL
          showErrorBanner("manage-admins", "Error: User does not have an account. \nUser must have an account before you can add them as an admin.");
        } else {
          showErrorBanner("manage-admins", "Error: Unable to add user.");
        }
      }
    )
  }

  onDeleteAdmin(username: any) {
    let url = GlobalConstants.DELETEAdmin + username
    this.http.delete(url, this.options).subscribe(
      (response) => {
        console.log(response); 
        location.reload();  
      },
      (error) => console.log(error)
    );
  }

  onAddDriverSubmit(data: any) {
    let url = GlobalConstants.POSTDrivers;
    let formattedData = {
      "church_id": this.churchId,
      "username": data.username,
    }
    
    console.warn(formattedData)
    this.http.post(url, formattedData, this.options).subscribe(
      (response) => {
        console.log(response); 
        location.reload();  
      },
      (error) => {
        console.log(error);
        if (error.status === 500 && error.error.error.includes("1452")) { // 1452 is the error code for the fk constraint failing in MySQL
          showErrorBanner("manage-drivers", "Error: User does not have an account. \nUser must have an account before you can add them as a driver.");
        } else {
          showErrorBanner("manage-drivers", "Error: Unable to add user.");
        }
      }
    )
  }

  onDeleteDriver(username: any) {
    let url = GlobalConstants.DELETEDriver;
    let params = new HttpParams().set('username', username).set('churchId', this.churchId);
    let options = { headers: this.headers, params: params };
    this.http.delete(url, options).subscribe(
        (response) => {
            console.log(response); 
            location.reload();  
        },
        (error) => console.log(error)
    );
  }

  setActiveTab(activeTab: any) {
    if (localStorage.getItem("activeTab") != activeTab) {
      removeAnyErrorBanners();
    }
    localStorage.setItem("activeTab", activeTab);
  };
  
  isActiveTab(tabName: any) {
    var activeTab = localStorage.getItem("activeTab") || "overview";
    return (activeTab === tabName);
  };
}

function showErrorBanner(elementId: any, msg: any) {
  // Check if an alert banner with the same content already exists
  const existingBanners = document.querySelectorAll('.alert.alert-danger');
  for (let i = 0; i < existingBanners.length; i++) {
    if (existingBanners[i].innerHTML === msg) {
      // Alert banner already exists, do nothing
      return;
    }
  }

  // Create bootstrap alert banner
  const alertBanner = document.createElement('div');
  alertBanner.className = 'alert alert-danger';
  alertBanner.innerHTML = msg;

  // Add it to the top of the page
  const accountPage: any = document.querySelector(".account-page .container #" + elementId);
  accountPage.prepend(alertBanner);
}

function removeAnyErrorBanners() {
  const existingBanners = document.querySelectorAll('.alert.alert-danger');
  for (let i = 0; i < existingBanners.length; i++) {
    existingBanners[i].remove();
  }
}