import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'press-kit',
    templateUrl: './press-kit.component.html',
    styleUrls: ['./press-kit.component.css']
  })
  export class PressKitComponent implements OnInit {

    public images: Array<string> = [
      'Screenshots/RPaW_CrossingTheStreet.png',
      'Screenshots/RPaW_FriendsInTheMuseum.png',
      'Screenshots/RPaW_HidingInTheBushes.png',
      'Screenshots/RPaW_MomentsAfterTheIncident.png',
      'Screenshots/RPaW_OfficeMeeting.png',
      'Screenshots/RPaW_SpottedInBigCoffee.png',
      'Screenshots/RPaW_SpottedInRecordStore.png',
      'Screenshots/RPaW_SpottedInTheKitchen.png',
      'Screenshots/RPaW_SpottedInTheStreet.png',
      'Screenshots/RPaW_SpottedOutsideGasStation.png'
    ];

    public logos: Array<string> = [
      'Logos/PantsLogo.png',
      'Logos/Steam_Capsule_Main_Possible_1.png',
      'Logos/Website_Header_TransparentBackground.png'
    ]

    constructor() { }
  
    ngOnInit() {
    }

    public imageUrl(name: string): string {
      return 'assets/' + name;
    }
  }
  