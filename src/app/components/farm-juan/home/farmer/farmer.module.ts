import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderModule } from '../../main-header/main-header.module';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MainHeaderModule,
  ]
})
export class FarmerModule { }
