import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service/api-service.service';
import {MatPaginator} from '@angular/material/paginator';
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
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  panelOpenState = false;
  displayedColumns: string[] = [
    'refNo', 'lastName', 'firstName', 'municipality',
    'province', 'lotNo', 'farmAddress', 'tenStatus', 'noHas'
  ];
  dataSources = new MatTableDataSource<UserModel>(PROFILE_DATA);
  userData: any = [];
  data: any = [];
  dataSource = new MatTableDataSource();
  errorMessage = '';

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

    this.dataSources.sort = this.sort;
    this.dataSources.paginator = this.paginator;
  }

  addFarmer(): void {
    this.router.navigate(['farmer']);
  }

  openDialog(): void {
    this.dialog.open(FilterDialogComponent);
  }

}
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

const PROFILE_DATA: UserModel[] = [
  {
    "id": 27,
    "user_id": 1,
    "first_name": "Kit",
    "middle_name": "Galicia",
    "last_name": "Sumabat",
    "gender": "Male",
    "house": "823",
    "street": "B Mayor",
    "brgy": "177",
    "region": "NCR",
    "municipality": "Alilem",
    "province": "Ilocos Norte",
    "user_contact_number": "09384170763",
    "dob": "1995-04-19",
    "ref_number": '',
    "total_farm_area": "N/A",
    "farm_address": "N/A",
    "ten_status": "N/A",
    "lot_no": "N/A"
  },
  {
    "id": 26,
    "user_id": 1,
    "first_name": "Kit",
    "middle_name": "Galicia",
    "last_name": "Sumabat",
    "gender": "Male",
    "house": "823",
    "street": "B Mayor",
    "brgy": "177",
    "region": "NCR",
    "municipality": "Alilem",
    "province": "Ilocos Norte",
    "user_contact_number": "09384170763",
    "dob": "1995-04-19",
    "ref_number": '',
    "total_farm_area": "N/A",
    "farm_address": "N/A",
    "ten_status": "N/A",
    "lot_no": "N/A"
  },
  {
    "id": 25,
    "user_id": 1,
    "first_name": "Kit",
    "middle_name": "Galicia",
    "last_name": "Sumabat",
    "gender": "Male",
    "house": "823",
    "street": "B Mayor",
    "brgy": "177",
    "region": "NCR",
    "municipality": "Alilem",
    "province": "Ilocos Norte",
    "user_contact_number": "09384170763",
    "dob": "1995-04-19",
    "ref_number": '',
    "total_farm_area": "N/A",
    "farm_address": "N/A",
    "ten_status": "N/A",
    "lot_no": "N/A"
  },
  {
    "id": 24,
    "user_id": 1,
    "first_name": "Kit",
    "middle_name": "Galicia",
    "last_name": "Sumabat",
    "gender": "Male",
    "house": "823",
    "street": "B Mayor",
    "brgy": "177",
    "region": "NCR",
    "municipality": "Alilem",
    "province": "Ilocos Norte",
    "user_contact_number": "09384170763",
    "dob": "1995-04-19",
    "ref_number": '',
    "total_farm_area": "N/A",
    "farm_address": "N/A",
    "ten_status": "N/A",
    "lot_no": "N/A"
  },
  {
    "id": 23,
    "user_id": 1,
    "first_name": "Christian",
    "middle_name": "Galicia",
    "last_name": "Sumabat",
    "gender": "Male",
    "house": "823",
    "street": "B Mayor",
    "brgy": "177",
    "region": "NCR",
    "municipality": "Alilem",
    "province": "Ilocos Norte",
    "user_contact_number": "09384170763",
    "dob": "1995-04-19",
    "ref_number": '',
    "total_farm_area": "N/A",
    "farm_address": "N/A",
    "ten_status": "N/A",
    "lot_no": "N/A"
  },
  {
    "id": 22,
    "user_id": 1,
    "first_name": "Kit",
    "middle_name": "Galicia",
    "last_name": "Sumabat",
    "gender": "Male",
    "house": "823",
    "street": "B Mayor",
    "brgy": "177",
    "region": "NCR",
    "municipality": "Alilem",
    "province": "Ilocos Norte",
    "user_contact_number": "09384170763",
    "dob": "1995-04-19",
    "ref_number": '',
    "total_farm_area": "N/A",
    "farm_address": "N/A",
    "ten_status": "N/A",
    "lot_no": "N/A"
  },
  {
    "id": 21,
    "user_id": 1,
    "first_name": "Kit",
    "middle_name": "Galicia",
    "last_name": "Sumabat",
    "gender": "Male",
    "house": "823",
    "street": "B Mayor",
    "brgy": "177",
    "region": "NCR",
    "municipality": "Alilem",
    "province": "Ilocos Norte",
    "user_contact_number": "09384170763",
    "dob": "1995-04-19",
    "ref_number": '',
    "total_farm_area": "N/A",
    "farm_address": "N/A",
    "ten_status": "N/A",
    "lot_no": "N/A"
  },
  {
    "id": 20,
    "user_id": 1,
    "first_name": "Jecsel",
    "middle_name": "Galicia",
    "last_name": "Tinao",
    "gender": "Male",
    "house": "823",
    "street": "B Mayor",
    "brgy": "177",
    "region": "NCR",
    "municipality": "Alilem",
    "province": "Ilocos Norte",
    "user_contact_number": "09384170763",
    "dob": "1995-04-19",
    "ref_number": '',
    "total_farm_area": "N/A",
    "farm_address": "N/A",
    "ten_status": "N/A",
    "lot_no": "N/A"
  },
  {
    "id": 19,
    "user_id": 1,
    "first_name": "Jecsel",
    "middle_name": "Galicia",
    "last_name": "Tinao",
    "gender": "Male",
    "house": "823",
    "street": "B Mayor",
    "brgy": "177",
    "region": "NCR",
    "municipality": "Alilem",
    "province": "Ilocos Norte",
    "user_contact_number": "09384170763",
    "dob": "1995-04-19",
    "ref_number": '',
    "total_farm_area": "N/A",
    "farm_address": "N/A",
    "ten_status": "N/A",
    "lot_no": "N/A"
  },
  {
    "id": 18,
    "user_id": 1,
    "first_name": "Kit",
    "middle_name": "Galicia",
    "last_name": "Sumabat",
    "gender": "Male",
    "house": "823",
    "street": "B Mayor",
    "brgy": "177",
    "region": "NCR",
    "municipality": "Alilem",
    "province": "Ilocos Norte",
    "user_contact_number": "09384170763",
    "dob": "1995-04-19",
    "ref_number": '',
    "total_farm_area": "N/A",
    "farm_address": "N/A",
    "ten_status": "N/A",
    "lot_no": "N/A"
  }
];

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
})
export class FilterDialogComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}
