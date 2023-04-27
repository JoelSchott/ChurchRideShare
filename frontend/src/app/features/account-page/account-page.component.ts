import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants, getFormattedDay } from 'src/app/global';

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

    const churchesEndpoint: string = GlobalConstants.GETChurchObject + churchId;
    this.http.get(churchesEndpoint).subscribe((response) => {
      this.churchInfo = response;
    });

    const servicesEndpoint: string = GlobalConstants.GETChurchServices + churchId;
    this.http.get(servicesEndpoint).subscribe((response) => {
      this.churchServices = response;

      for (let service of this.churchServices) {
        const minutes = service.startTime
        service.startTime = getFormattedDay(minutes);
      }
    });    
  }
}
