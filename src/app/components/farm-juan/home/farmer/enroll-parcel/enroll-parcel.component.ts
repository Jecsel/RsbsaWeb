import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service/api-service.service';

@Component({
  selector: 'app-enroll-parcel',
  templateUrl: './enroll-parcel.component.html',
  styleUrls: ['./enroll-parcel.component.scss']
})
export class EnrollParcelComponent implements OnInit {
  livelihoodFormGroup: FormGroup;
  farmerID: string | null;
  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.declareFormBuilder();
    this.farmerID = localStorage.getItem("profileID");
    this.initData();
  }

  declareFormBuilder(): void{
    this.livelihoodFormGroup = this.formBuilder.group({
      farmer: [''],
    });
  }
  initData():void {

  }

}
