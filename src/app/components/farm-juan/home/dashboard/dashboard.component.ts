import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service/api-service.service';
export interface UserModel {
  brgy: string;
  dob: string;
  farm_address: string;
  first_name: string;
  gender: string;
  house: string;
  id: number;
  last_name: string;
  lot_no: string;
  middle_name: string;
  municipality: string;
  province: string;
  ref_number: string;
  region: string;
  street: string;
  ten_status: string;
  total_farm_area: string;
  user_contact_number: string;
  user_id: number;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  panelOpenState = false;
  displayedColumns: string[] = [
    'refNo', 'lastName', 'firstName', 'municipality',
    'province', 'lotNo', 'farmAddress', 'tenStatus', 'noHas'
  ];
  userData: any = [];
  data: any = [];
  dataSource = new MatTableDataSource();
  errorMessage = '';
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
    private router: Router) { }
  ngAfterViewInit(): void {
    this.apiService
      .getAllFarmers({page: 1})
      .subscribe(res => {
        this.data.push(res);
        console.log(this.data);
        this.userData.push(this.data[0].profiles);
        this.dataSource = new MatTableDataSource(this.userData);
      }, err => {
        this.errorMessage = err.error;
      });
    this.dataSource.sort = this.sort;
  }

  addFarmer(): void {
    this.router.navigate(['farmer']);
  }

  openDialog(): void {
    this.dialog.open(FilterDialogComponent);
  }

}

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
})
export class FilterDialogComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}
