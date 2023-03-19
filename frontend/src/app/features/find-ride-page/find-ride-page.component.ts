import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'find-ride-page',
  templateUrl: './find-ride-page.component.html',
  styleUrls: ['./find-ride-page.component.scss']
})

export class FindRidePageComponent implements OnInit {
  searchText: String = "";
  public churchInfo: any;

  // // Simulate API
  // rawJSON=
  // {
  //   "churches": [
  //       {
  //           "id": "1", 
  //           "name": "Mosaic",
  //           "address": "1600 Bridge School Rd Rolla, MO 65401",
  //           "serviceTimes": ["Sunday at 9:30 am", "Sunday at 11:00am"], 
  //           "website": "mosaicrolla.com"  
          
  //       },
  //       {
  //         "id": "1", 
  //         "name": "Moasaic",
  //         "address": "1600 Bridge School Rd Rolla, MO 65401",
  //         "serviceTimes": ["Sunday at 9:30 am", "Sunday at 11:00am"], 
  //         "website": "mosaicrolla.com"  
        
  //     },
  //       {
  //           "id": "2",
  //           "name": "Riverview",
  //           "address": "989 State Hwy 42, Osage Beach, MO 65065",
  //           "serviceTimes": ["Sunday at 9:30 am", "Sunday at 11:00am"],
  //           "website": "rbclake.org"
  //       },
  //   ]
  // }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url: string = 'https://prcj5gwv06.execute-api.us-east-2.amazonaws.com/test1/churches';
    this.http.get(url).subscribe((response) => {
      this.churchInfo = response;
    });
  }

}