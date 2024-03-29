import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrimaryButtonComponent } from './shared/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './shared/secondary-button/secondary-button.component';
import { SignUpChoiceComponent } from './features/sign-up-choice/sign-up-choice.component';
import { FindRidePageComponent } from './features/find-ride-page/find-ride-page.component';
import { ChurchSearchFilterPipe } from './shared/church-search-filter.pipe';
import { ChurchDisplayCardComponent } from './shared/church-display-card/church-display-card.component';
import { AccountPageComponent } from './features/account-page/account-page.component';
import { JwtTokenService } from './services/jwt-token.service';
import { CookieService } from 'ngx-cookie-service';
import { DriverPageComponent } from './features/driver-page/driver-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    FooterComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    SignUpChoiceComponent,
    FindRidePageComponent,
    ChurchSearchFilterPipe,
    ChurchDisplayCardComponent,
    AccountPageComponent,
    DriverPageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [JwtTokenService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
