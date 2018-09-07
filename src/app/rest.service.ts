import { Injectable } from '@angular/core';
import {httpFactory} from '@angular/http/src/http_module';
import {HttpClient} from '@angular/common/http';
import {subscribeOn} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  base_url:any="http://localhost:3000/users/";
  constructor(public http: HttpClient) {

  }

  getAllUSer(){

     return this.http.get(this.base_url);
  }
}
