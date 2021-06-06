import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ApiService } from 'src/app/services/api-service/api-service.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss'],
})
export class FarmerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }
  ngOnInit(): void {

  }
}
