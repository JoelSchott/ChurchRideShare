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

  constructor(private http: HttpClient) { }

  ngOnInit(): void { 
    if(this.church?.imageExtension != "png"){
      this.imageUrl == this.church?.imageExtension;
    }
  }
 
  // For website metadata (picture) api
  // Probably won't use because of limited requests alotted
  public getWebImg(websiteUrl: string | undefined){
    const metaUrl: string = 'http://api.linkpreview.net/?key=cc9dc107564bdb5b97979ef0ce45b374&q=' + websiteUrl;
    this.http.get(metaUrl).subscribe((response) => {
      this.webData = response;
      console.log("HERE: " + this.webData.image);
    });
    
    return this.webData;
  }

}
