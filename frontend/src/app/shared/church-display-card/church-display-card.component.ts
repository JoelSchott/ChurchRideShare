import { Component, Input, OnInit } from '@angular/core';
import { Church } from '../church';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { GlobalConstants, getFormattedDay, getTokenId } from 'src/app/global';
import { CookieService } from 'ngx-cookie-service';
import { JwtTokenService } from 'src/app/services/jwt-token.service';

@Component({
  selector: 'church-display-card',
  templateUrl: './church-display-card.component.html',
  styleUrls: ['./church-display-card.component.scss']
})
export class ChurchDisplayCardComponent implements OnInit {
  // Church object passed in
  @Input() church?: Church;
  public webData: any;
  public imageUrl: string = "/assets/default_church_icon.png"; //Need license for commercial use
  public churchServices: any;
  public today= new Date();
  public jstoday = '';

  public isSignedIn = false;

  constructor(private http: HttpClient, 
              private cookieService: CookieService,
              private jwtService: JwtTokenService,) { 
    this.jstoday = formatDate(this.today, 'yyyy-MM-dd HH:mm:ss', 'en-US');
  }


  ngOnInit(): void { 
    // Check if signed in
    if(this.cookieService.get("userToken")){
      console.log("signed in");
      this.isSignedIn = true;
    }

    // If no image in database, assign default image
    if(this.church?.imageExtension != "png"){
      this.imageUrl == this.church?.imageExtension;
    }

    // Retrieve service times
    let url: string = GlobalConstants.GETChurchServices + this.church?.id;
    this.http.get(url).subscribe((response) => {
      this.churchServices = response;
    });
  }

  ngOnChange(): void{

  }

  // Convert backend service data to readible time
  public timeDisplay(minutes: number){
    return getFormattedDay(minutes);
  }

  // autoFillForm(){

  // }

  onSubmit(data: any){
    if(this.isSignedIn) this.onUserSubmit(data);
    else this.onGuestSubmit(data);
  }

  onUserSubmit(data: any){
    this.jwtService.setToken(this.cookieService.get("userToken"));
    let url: string= GlobalConstants.POSTUserRideRequests;
    console.log(this.cookieService.get("userToken"));
    var headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': getTokenId(this.cookieService.get("userToken"))
    });
    let formattedData = {
        "firstName": data.firstName,
        "lastName": data.lastName,
        "phoneNumber": data.phoneNumber,
        "personCount": data.personCount,
        "street": data.street,
        "city": data.city,
        "state": data.state,        
        "zipCode": data.zipCode,
        "description": data.description,
        "serviceId": data.serviceId,
        "requestTime": this.jstoday,
    }

    console.warn(formattedData);
    this.http.post(url, formattedData, {'headers':headers}).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    ) 
  }

  onGuestSubmit(data: any){
    let url = GlobalConstants.POSTGuestRideRequest;
    let headers = {"Content-Type": "application/json"}
    let formattedData = {
        "firstName": data.firstName,
        "lastName": data.lastName,
        "phoneNumber": data.phoneNumber,
        "personCount": data.personCount,
        "street": data.street,
        "city": data.city,
        "state": data.state,        
        "zipCode": data.zipCode,
        "description": data.description,
        "serviceId": data.serviceId,
        "requestTime": this.jstoday,
    }

    console.warn(formattedData);
    this.http.post(url, formattedData, {'headers':headers}).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )  
  console.log("guest");
  }
    
}
