import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/farm-juan/home/dashboard/dashboard.component';
import { DataProfileComponent } from './components/farm-juan/home/farmer/data-profile/data-profile.component';
import { FarmerComponent } from './components/farm-juan/home/farmer/farmer.component';
import { HomeComponent } from './components/farm-juan/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'farmer', component: FarmerComponent},
  { path: 'profile', component: DataProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
