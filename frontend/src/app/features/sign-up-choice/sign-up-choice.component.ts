import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/global';

@Component({
  selector: 'sign-up-choice',
  templateUrl: './sign-up-choice.component.html',
  styleUrls: ['./sign-up-choice.component.scss']
})
export class SignUpChoiceComponent implements OnInit {
  public riderUrl: string= GlobalConstants.riderSignUpCognitoUrl;
  public driverUrl: string= GlobalConstants.driverSignUpCognitoUrl;
  public churchUrl: string= GlobalConstants.churchSignUpCognitoUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
