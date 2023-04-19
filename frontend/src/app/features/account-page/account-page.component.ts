import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  public churchInfo: any;
  public churchServices: any;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const churchId: string = 'ba227e8b-a40b-43fa-9ebe-c059ac10c27b'

    const churchesEndpoint: string = 'https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/churches?id=' + churchId;
    this.http.get(churchesEndpoint).subscribe((response) => {
      this.churchInfo = response;
    });

    const servicesEndpoint: string = 'https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/services?church_id=' + churchId;
    this.http.get(servicesEndpoint).subscribe((response) => {
      this.churchServices = response;

      for (let service of this.churchServices) {
        const minutes = service.startTime
        service.startTime = getFormattedDay(minutes);
      }
    });    
  }
}

function getFormattedDay(minutes: any) {
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
