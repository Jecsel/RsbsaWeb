import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service/api-service.service';

@Component({
  selector: 'app-enroll-livelihood',
  templateUrl: './enroll-livelihood.component.html',
  styleUrls: ['./enroll-livelihood.component.scss']
})
export class EnrollLivelihoodComponent implements OnInit {
  livelihoodFormGroup: FormGroup;
  livelihoodData: any = {
    "livelihood":{
        "activity_id":3,
        "farming":"2000",
        "non_farming":"1000",
        "profile_id":9,
        "livelihood_type_data":[
            {
                "activity_type_id":1,
                "description":""
            },
            {
                "activity_type_id":2,
                "description":""
            },
            {
                "activity_type_id":3,
                "description":"Special Sweet Corn"
            }
        ]
    }
};
  farmerID: string | null;
  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }
  ngOnInit(): void {
    this.declareFormBuilder();
    this.farmerID = localStorage.getItem("profileID");
    this.initData();
  }

  initData(): void{
  }

  declareFormBuilder(): void{
    this.livelihoodFormGroup = this.formBuilder.group({
      farmer: [true],
      farmer_rice: [true],
      farmer_corn: [true],
      farmer_other_crops: [true],
      farmer_other_crops_spec: ['Special Corn'],
      farmer_livestock: [false],
      farmer_livestock_spec: [''],
      farmer_poultry: [false],
      farmer_poultry_spec: [''],
      farmworker: [false],
      farmworker_land: [false],
      farmworker_planting: [false],
      farmworker_cultivation: [false],
      farmworker_harvesting: [false],
      farmworker_other: [false],
      farmworker_other_spec: [''],
      fisherfolk: [false],
      fisherfolk_capture: [false],
      fisherfolk_aquaculture: [false],
      fisherfolk_gleaning: [false],
      fisherfolk_processing: [false],
      fisherfolk_vending: [false],
      farming: ['10000', Validators.required],
      non_farming: ['20000', Validators.required]
    });
  }

  saveLivelihood(): void{
    this.validateDate();
    this.apiService
      .postLivelihood(this.livelihoodData)
      .subscribe((res: any) => {
          alert(res);
        }, (err: any) => {
          console.log(err);
          alert(err);
        });
  }

  validateDate(): void{
    var d = this.livelihoodFormGroup.value
    for (var key in d) {
      if (d.hasOwnProperty(key)) {
          console.log(key + " -> " + d[key]);
        switch (key) {
          case 'farmer':
            
            break;
          case 'farmworker':
            
            break;
          case 'farmer':
            
            break;
          default:
            break;
        }
      }
  }
  }
}
