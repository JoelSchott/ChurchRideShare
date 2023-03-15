import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrimaryButtonComponent } from './shared/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './shared/secondary-button/secondary-button.component';
import { SignUpChoiceComponent } from './features/sign-up-choice/sign-up-choice.component';
import { FindRidePageComponent } from './features/find-ride-page/find-ride-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    FooterComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    SignUpChoiceComponent,
    FindRidePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
