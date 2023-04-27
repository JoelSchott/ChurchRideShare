import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/app/global';

@Component({
  selector: 'find-ride-page',
  templateUrl: './find-ride-page.component.html',
  styleUrls: ['./find-ride-page.component.scss']
})

export class FindRidePageComponent implements OnInit {
  public GETChurchObjects: string= GlobalConstants.GETChurchObjects;
  searchText: String = "";
  public churchInfo: any;
  public websiteInfo: any;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.GETChurchObjects).subscribe((response) => {
      this.churchInfo = response;
    });

  }

}