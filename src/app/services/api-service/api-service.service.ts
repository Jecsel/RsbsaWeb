import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      Accept: '*/*',
      'Content-Type': 'application/json'
    }),
  };

  // ----------- GET REQUEST -------------//
  getInitData(): Observable<any>{
    return this.httpClient.get(this.baseUrl + 'v1/enrollment', this.httpOptions)
      .pipe(map((response: any) => {
        return response;
      }));
  }
  getFarmerProfile(id: any): Observable<void>{
    return this.httpClient.get(this.baseUrl + 'v1/enrollment/' + id)
      .pipe(map((response: any) => {
        localStorage.setItem('farmerProfile', response);
        return response;
      }));
  }

  getLivelihood(): Observable<void>{
    return this.httpClient.get(this.baseUrl + 'v1/enrollment/get_main_livelihood')
      .pipe(map((response: any) => {
        localStorage.setItem('livelihood_data', response.toString());
        return response;
      }));
  }

  // ----------- POST REQUEST -------------//
  postProfile(model: any): Observable<void>{
    return this.httpClient.post(this.baseUrl + 'v1/enrollment', model)
      .pipe(map((response: any) => {
        localStorage.setItem('profileID', response.profile_id);
        return response;
      }));
  }

  postLivelihood(model: any): Observable<void>{
    return this.httpClient.post(this.baseUrl + 'v1/enrollment/create_livelihoods', model)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  getAllFarmers(model: any): Observable<void>{
    return this.httpClient.post(this.baseUrl + 'v1/dashboard/list', model)
      .pipe(map((response: any) => {
        return response;
      }));
  }
  login(model: any): Observable<void>{
    return this.httpClient.post(this.baseUrl + 'v1/user/sign_in', model)
      .pipe(map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
        }
        return;
      }));
  }
}
