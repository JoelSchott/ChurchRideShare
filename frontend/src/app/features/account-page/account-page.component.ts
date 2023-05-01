import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalConstants, getFormattedDay } from 'src/app/global';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  public churchId: string = 'ba227e8b-a40b-43fa-9ebe-c059ac10c27b'

  public churchInfo: any = null;
  public churchServices: any = null;
  public rideRequests: any = null;
  public churchAdmins: any = null;
  public churchDrivers: any = null;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {    
    this.http.get(GlobalConstants.GETChurchObject + this.churchId).subscribe((response) => {
      this.churchInfo = response;
    });

    this.http.get(GlobalConstants.GETChurchServices + this.churchId).subscribe((response) => {
      this.churchServices = response;

      for (let service of this.churchServices) {
        const minutes = service.startTime;
        service.startTime = getDayFormat(minutes);
      }
    });

    this.http.get(GlobalConstants.GETGuestRideRequests).subscribe((response) => {
      this.rideRequests = response;
    });

    this.http.get(GlobalConstants.GETAdminsByChurchId + this.churchId).subscribe((response) => {
      this.churchAdmins = response;
    });

    this.http.get(GlobalConstants.GETDriversByChurchId + this.churchId).subscribe((response) => {
      this.churchDrivers = response;
    });
  }

  onChurchInfoSubmit(data: any) {
    let url = GlobalConstants.PATCHChurchObject + this.churchId;
    let headers = { 'Content-Type': 'application/json' }
    let formattedData = {
      "name": data.name,
      "state": data.state,
      "city": data.city,
      "street": data.street,
      "zipCode": data.zipCode,
      "description": data.description,
      "website": data.website,
    }

    this.http.patch(url, formattedData, {'headers':headers}).subscribe(
      (response) => {
        console.log(response); 
        location.reload();  
      },
      (error) => console.log(error)
    )
  }

  onAddServiceSubmit(data: any) {
    let url = GlobalConstants.POSTService;
    let headers = { 'Content-Type': 'application/json' }
    let formattedData = {
      "church_id": this.churchId,
      "start_time": getMinutesFormat(data.day, data.time),
      "description": data.name,
    }
    
    this.http.post(url, formattedData, {'headers':headers}).subscribe(
      (response) => {
        console.log(response); 
        location.reload();  
      },
      (error) => console.log(error)
    )
  }

  onDeleteService(serviceId: any) {
    let url = GlobalConstants.DELETEService + serviceId
    this.http.delete(url).subscribe(
      (response) => {
        console.log(response); 
        location.reload();  
      },
      (error) => console.log(error)
    );
  }

  onAddAdminSubmit(data: any) {
    let url = GlobalConstants.POSTAdmins;
    let headers = { 'Content-Type': 'application/json' }
    let formattedData = {
      "church_id": this.churchId,
      "username": data.name,
    }
    
    console.warn(formattedData)
    this.http.post(url, formattedData, {'headers':headers}).subscribe(
      (response) => {
        console.log(response); 
        location.reload();  
      },
      (error) => console.log(error)
    )
  }

  onDeleteAdmin(username: any) {
    let url = GlobalConstants.DELETEAdmin + username
    this.http.delete(url).subscribe(
      (response) => {
        console.log(response); 
        location.reload();  
      },
      (error) => console.log(error)
    );
  }

  onAddDriverSubmit(data: any) {
    let url = GlobalConstants.POSTDrivers;
    let headers = { 'Content-Type': 'application/json' }
    let formattedData = {
      "church_id": this.churchId,
      "username": data.name,
    }
    
    console.warn(formattedData)
    this.http.post(url, formattedData, {'headers':headers}).subscribe(
      (response) => {
        console.log(response); 
        location.reload();  
      },
      (error) => console.log(error)
    )
  }

  onDeleteDriver(username: any) {
    let url = GlobalConstants.DELETEDriver
    let params = new HttpParams().set('username', username).set('churchId', this.churchId);
    this.http.delete(url, { params }).subscribe(
      (response) => {
        console.log(response); 
        location.reload();  
      },
      (error) => console.log(error)
    );
  }

  setActiveTab(activeTab: any) {
    localStorage.setItem("activeTab", activeTab);
  };
  
  isActiveTab(tabName: any) {
    var activeTab = localStorage.getItem("activeTab") || "overview";
    return (activeTab === tabName);
  };
}

function getDayFormat(minutes: any) {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const minutesInDay = 1440; // 24 * 60 (24 hours in a day, 60 minutes in an hour)
  
  const dayOfWeek = weekdays[Math.floor(minutes / minutesInDay)];
  const minutesInCurrentDay = minutes % minutesInDay;
  
  const hour = Math.floor(minutesInCurrentDay / 60);
  const minute = minutesInCurrentDay % 60;
  const amPm = hour < 12 ? "am" : "pm";
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // convert hour to 12-hour format
  
  return `${dayOfWeek}, ${formattedHour}:${minute.toString().padStart(2, "0")}${amPm}`;
}

function getMinutesFormat(day: any, time: any) {
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const dayIndex = daysOfWeek.indexOf(day.toLowerCase());

  const hours = parseInt(time.split(':')[0]);
  const minutes = parseInt(time.split(':')[1]);
  const totalMinutes = (dayIndex * 24 * 60) + (hours * 60) + minutes;

  return totalMinutes;
}