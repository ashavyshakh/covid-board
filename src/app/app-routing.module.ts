import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListingComponent } from './country-listing/country-listing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'country',
    component: CountryListingComponent
  },
  {
    path: 'edit',
    component: UpdateComponent
  },
  { path: '**', redirectTo: 'dut', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }