import { Component, Input, OnInit } from '@angular/core';
import { Church } from '../church';
import { HttpClient } from '@angular/common/http';

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

  //RECONFIGURE WHEN AUTH IMPLEMENTED
  public isSignedIn = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { 
    // If no image in database, assign default image
    if(this.church?.imageExtension != "png"){
      this.imageUrl == this.church?.imageExtension;
    }

    // Retrieve service times
    const url: string = 'https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/services?church_id=' + this.church?.id;
    this.http.get(url).subscribe((response) => {
      this.churchServices = response;
    });
  }

  // Convert backend service data to readible time
  public timeDisplay(rawMinutes: number){
    let dayOfWeekCalc = Math.floor(rawMinutes / (60*24));
    let dayOfWeek = "";

    let timeOfDay = rawMinutes % (60*24);
    let hours = Math.floor(timeOfDay / 60) % 12;
    if(hours == 0){
      hours = 12;
    }
    let min = timeOfDay % 60;
    let formatedMin = min.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
    let amOrPm = "";
    if(timeOfDay < (12*60)){
      amOrPm = "am";
    }
    else{
      amOrPm = "pm";
    }

    switch(dayOfWeekCalc){
      case 0:
        dayOfWeek = "Sunday";
        break;
      case 1:
        dayOfWeek = "Monday";
        break;
      case 2:
        dayOfWeek = "Tuesday";
        break;
      case 3:
        dayOfWeek = "Wednesday";
        break;
      case 4:
        dayOfWeek = "Thursday";
        break;
      case 5:
        dayOfWeek = "Friday";
        break;
      case 6:
        dayOfWeek = "Saturday";
        break;
      default:
        dayOfWeek = "ERROR";
        break;
    }    
    return dayOfWeek + " " + hours + ":" + formatedMin + amOrPm;
  }

  onUserSubmit(data: any){
    let url = "https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/user-ride-requests";
    let headers = {"Content-Type": "application/json"}
    let formattedData = {
        "username" : "Testing",
        "personCount": data.personCount,
        "street": data.street,
        "city": data.city,
        "state": data.state,        
        "zipCode": data.zipCode,
        "description": data.description,
        "serviceId": data.serviceId,
    }
    // let response = requests.post(url, headers=headers, data=json.dumps(data));

    console.warn(formattedData);
    // this.http.post(url)
  }

  onGuestSubmit(data: any){
    let url = "NEEDURL!";
    let headers = {"Content-Type": "application/json"}
    let formattedData = {
        "username" : "Testing",
        // "firstName": data.firstName,
        // "lastName": data.lastName,
        // "phoneNumber": data.phoneNumber,
        "personCount": data.personCount,
        "street": data.street,
        "city": data.city,
        "state": data.state,        
        "zipCode": data.zipCode,
        "description": data.description,
        "serviceId": data.serviceId,
    }
    // let response = requests.post(url, headers=headers, data=json.dumps(data));

    console.warn(formattedData);
    // this.http.post(url)
  }
 
  // For website metadata (picture) api
  // Probably won't use because of limited requests alotted
  // public getWebImg(websiteUrl: string | undefined){
  //   const metaUrl: string = 'http://api.linkpreview.net/?key=cc9dc107564bdb5b97979ef0ce45b374&q=' + websiteUrl;
  //   this.http.get(metaUrl).subscribe((response) => {
  //     this.webData = response;
  //     console.log("HERE: " + this.webData.image);
  //   });
    
  //   return this.webData;
  // }

}
