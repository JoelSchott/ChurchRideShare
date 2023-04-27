import { Component, OnInit } from '@angular/core';
// import * as myGlobals from 'global-constants';
import { GlobalConstants } from 'src/app/global';

@Component({
  selector: 'sign-in-choice',
  templateUrl: './sign-in-choice.component.html',
  styleUrls: ['./sign-in-choice.component.scss']
})
export class SignInChoiceComponent implements OnInit {
  public riderUrl: string= GlobalConstants.riderSignInCognitoUrl;
  public driverUrl: string= GlobalConstants.driverSignInCognitoUrl;
  public churchUrl: string= GlobalConstants.churchSignInCognitoUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
