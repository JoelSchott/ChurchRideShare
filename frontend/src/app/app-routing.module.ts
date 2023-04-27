import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';
import { SignUpChoiceComponent } from './features/sign-up-choice/sign-up-choice.component';
import { FindRidePageComponent } from './features/find-ride-page/find-ride-page.component';
import { AccountPageComponent } from './features/account-page/account-page.component';
import { SignInChoiceComponent } from './features/sign-in-choice/sign-in-choice.component';

const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'sign-up', component: SignUpChoiceComponent },
    { path: 'sign-in', component: SignInChoiceComponent },
    { path: 'find-ride', component: FindRidePageComponent },
    { path: 'account', component: AccountPageComponent },
    { path: '', component: HomePageComponent },
    { path: '**', component: HomePageComponent },
      // { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
