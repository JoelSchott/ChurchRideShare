import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';
import { SignUpChoiceComponent } from './features/sign-up-choice/sign-up-choice.component';
import { FindRidePageComponent } from './features/find-ride-page/find-ride-page.component';
import { AccountPageComponent } from './features/account-page/account-page.component';

const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'sign-up', component: SignUpChoiceComponent },
    { path: 'find-ride', component: FindRidePageComponent },
    { path: 'account', component: AccountPageComponent },
    { path: '', component: HomePageComponent },
    { path: '**', component: HomePageComponent },
      // { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
