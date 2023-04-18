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
  public websiteInfo: any;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url: string = 'https://xyae35uw4b.execute-api.us-east-2.amazonaws.com/test1/church';
    this.http.get(url).subscribe((response) => {
      this.churchInfo = response;
    });

  }

  // public getWebImg(websiteUrl: string){
  //   const metaUrl: string = 'http://api.linkpreview.net/?key=123456&q=https://'+ websiteUrl;
  //   this.http.get(metaUrl).subscribe((response) => {
  //     return response;
  //   });
  // }

}