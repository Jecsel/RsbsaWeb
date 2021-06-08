import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ApiService } from 'src/app/services/api-service/api-service.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { analyzeFileForInjectables } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss'],
})
export class FarmerComponent implements OnInit {
  farmerID: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router) { }
  data: any;
  hasProfile = false;
  hasLivelihood = false ;
  hasParcel = false;
  toggleMenuControl = new FormControl();
  ngOnInit(): void {
    this.getInitData();
  }

  getInitData(): void {
    this.toggleMenuControl.setValue('profile');
    this.farmerID = localStorage.getItem("profileID");
    this.apiService
      .getFarmerProfile(this.farmerID)
      .subscribe((res: any) => {
        this.data = res;
        this.data.profile !== undefined ?  this.hasProfile = !this.hasProfile : this.hasProfile = this.hasProfile;
      }, (err: any) => {
        console.log(err);
        alert(err);
      });
  }
}
