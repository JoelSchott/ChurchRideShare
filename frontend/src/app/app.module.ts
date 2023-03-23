import { NgModule } from '@angular/core';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
