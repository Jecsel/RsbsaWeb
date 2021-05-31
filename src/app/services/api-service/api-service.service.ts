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
      'Accept': '*/*',
      "Content-Type": "application/json",
    }),
  };

  //----------- GET REQUEST -----------
  // getAllFarmers(): Observable<void> {
  //   return this.httpClient.get(this.baseUrl + 'v1/dashboard')
  //   .pipe(map((response: any) => {
  //       return response;
  //     }));
  // }

  //----------- POST REQUEST -------------
  getAllFarmers(model: any): Observable<void>{
    return this.httpClient.post(this.baseUrl + 'v1/dashboard/list', model, this.httpOptions)
      .pipe(map((response: any) => {
        return response;
      }));
  }

  login(model: any): Observable<void>{
    return this.httpClient.post(this.baseUrl + 'v1/user/sign_in', model)
      .pipe(map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token)
        }
        return;
      }));
  }
}
