import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';
import { SignUpChoiceComponent } from './features/sign-up-choice/sign-up-choice.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'signup', component: SignUpChoiceComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
