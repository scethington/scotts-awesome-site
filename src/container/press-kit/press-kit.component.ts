import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'press-kit',
    templateUrl: './press-kit.component.html',
    styleUrls: ['./press-kit.component.css']
  })
  export class PressKitComponent implements OnInit {

    public images: Array<string> = [
      'IGF_Screenshot1.png',
      'RPaW_CrossingTheStreet.png',
      'RPaW_FriendsInTheMuseum.png',
      'RPaW_HidingInTheBushes.png',
      'RPaW_MomentsAfterTheIncident.png',
      'RPaW_OfficeMeeting.png',
      'RPaW_SpottedInBigCoffee.png',
      'RPaW_SpottedInRecordStore.png',
      'RPaW_SpottedInTheKitchen.png',
      'RPaW_SpottedInTheStreet.png',
      'RPaW_SpottedOutsideGasStation.png'
    ]

    constructor() { }
  
    ngOnInit() {
    }

    public imageUrl(name: string): string {
      return 'assets/Screenshots/' + name;
    }
  }
  