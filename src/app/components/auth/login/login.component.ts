import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;
  data: any;
  // tslint:disable-next-line: variable-name
  error_message: any;

  constructor( private router: Router, private apiService: ApiService) {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl(''),
    });
   }


  ngOnInit(): void {
    this.data = {credential: {} };
  }

  submitLogin(): void {
    this.data.credential = this.form.value;
    this.apiService.login(this.data).subscribe(next => {
      this.router.navigate(['home']);
    }, err => {
      this.error_message = err.error;
      alert(this.error_message);
    });

  }

}
