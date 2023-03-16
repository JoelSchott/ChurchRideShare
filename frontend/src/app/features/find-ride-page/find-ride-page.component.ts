import { Component, OnInit } from '@angular/core';
import { Church } from 'src/app/shared/church';

@Component({
  selector: 'find-ride-page',
  templateUrl: './find-ride-page.component.html',
  styleUrls: ['./find-ride-page.component.scss']
})

export class FindRidePageComponent implements OnInit {
  churches: Churches = [];
  searchText: String = "";

  // Simulate API
  rawJSON=
  {
    "churches": [
        {
            "id": "1", 
            "name": "Mosaic",
            "address": "1600 Bridge School Rd Rolla, MO 65401",
            "serviceTimes": ["Sunday at 9:30 am", "Sunday at 11:00am"], 
            "website": "mosaicrolla.com"  
          
        },
        {
          "id": "1", 
          "name": "Moasaic",
          "address": "1600 Bridge School Rd Rolla, MO 65401",
          "serviceTimes": ["Sunday at 9:30 am", "Sunday at 11:00am"], 
          "website": "mosaicrolla.com"  
        
      },
        {
            "id": "2",
            "name": "Riverview",
            "address": "989 State Hwy 42, Osage Beach, MO 65065",
            "serviceTimes": ["Sunday at 9:30 am", "Sunday at 11:00am"],
            "website": "rbclake.org"
        },
    ]
  }

  constructor() {}

  ngOnInit() {
    // Put JSON data into custon array of church objects
    let c: any = this.rawJSON.churches;
    for(const i in c){
      let church: Church = { id: c[i].id, name: c[i].name, address: c[i].address, serviceTimes: c[i].serviceTimes, website: c[i].website };
      this.churches.push(church);
    }
  }

}

type Churches = Array<Church>;
