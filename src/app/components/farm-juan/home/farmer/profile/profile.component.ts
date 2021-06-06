import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ApiService } from 'src/app/services/api-service/api-service.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]

})
export class ProfileComponent implements OnInit {
  profileFormGroup: FormGroup;
  otherFormGroup: FormGroup;
  profileControl = new FormControl();
  farmData: any;
  filteredOptions: Observable<string[]>;
  data: any;
  dataProfile: any;
  dataOther: any;
  mockData = {
        last_name: 'Durant',
        first_name: 'Jec',
        middle_name: 'Galicia',
        extension_name: 'Jr',
        gender: 1,
        province: 1,
        region: 1,
        municipality: 1,
        house: 'RM P 823',
        street: 'Rizal St',
        brgy: 'Santa Fe',
        user_contact_number: '09384170763',
        dob: '1995-04-19 13:05:32',
        religion: 'Catholic',
        civil_status: 1,
        spouse_name: 'Abby',
        mother_name: 'Marie',
        household_head: false,
        household_name: 'Ron',
        household_head_relationship: 'Father',
        numbers_household_member: '10',
        numbers_of_male: '6',
        numbers_of_female: '4',
        person_with_disability: true,
        four_p_beneficiary: true,
        with_government_id: true,
        agrarian: true,
        government_number: 'GVR-1234',
        member_of_association: true,
        association_number: 'AS - 0011',
        member_of_indigenous_group: true,
        indigenous_group_number: 'IND-9378',
        person_to_notify: 'Abe',
        emergency_person_number: '0987823423',
        education_attaintments: 1
};
  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }


  async ngOnInit(): Promise<void> {
    this.declareFormBuilder();
    this.getInitData();
  }

  getFilterOptions(): void{
    this.filteredOptions = this.profileFormGroup.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  declareFormBuilder(): void{
    this.profileFormGroup = this.formBuilder.group({
      last_name: ['Tinao', Validators.required],
      first_name: ['Jecsel', Validators.required],
      middle_name: ['Galicia', Validators.required],
      extension_name: ['Jr', Validators.required],
      gender: [1, Validators.required],
      photo: ['Photo', Validators.required],
      house: ['823', Validators.required],
      street: ['B Mayor', Validators.required],
      brgy: ['177', Validators.required],
      region: [1, Validators.required],
      province: [1, Validators.required],
      municipality: [1, Validators.required],
      user_contact_number: ['09384170763', Validators.required],
      dob: ['1995-04-19 13:05:32', Validators.required],
      place_of_birth: ['Tabugon Santa Fe Romblon', Validators.required],
      religion: ['Roman Catholic', Validators.required],
      civil_status: [1, Validators.required],
      spouse_name: ['None', Validators.required],
      mother_name: ['Jho'],
      agrarian: [true]
    });
    this.otherFormGroup = this.formBuilder.group({
      education_attaintments: [1, Validators.required],
      person_to_notify: ['Abegail Cruz', Validators.required],
      emergency_person_number: ['09504185332', Validators.required],
      household_head: [false],
      household_name: ['Ron'],
      household_head_relationship: ['Father'],
      numbers_household_member: ['10'],
      numbers_of_male: ['4'],
      numbers_of_female: ['6'],
      person_with_disability: [true],
      four_p_beneficiary: [true],
      member_of_association: [true],
      member_no_of_association: ['AS - 0011'],
      member_of_indigenous_group: [true],
      member_no_of_indigenous_group: ['IND-9378']
    });
    this.profileControl = new FormControl();
  }

  submitProfile(): void {
    this.data = {enrollment: {...this.profileFormGroup.value, ...this.otherFormGroup.value}};
    console.log(this.data);
    this.apiService.postProfile(this.data).subscribe(res => {
      console.log(res);
    }, err => {
      alert(err.error);
    });

  }

  getInitData(): void{
    this.apiService.getInitData()
      .subscribe(res => {
        console.log(res);
        this.farmData = res;
      }, error  => {
        alert(error.data.message);
      });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.farmData
      .filter((option: any) => option.toLowerCase().includes(filterValue));
  } 

}
