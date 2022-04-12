import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{apiResponse} from './models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="https://reqres.in/api/users";

  constructor(private http:HttpClient) { }
  getUsers=():Observable <apiResponse> => {
    return this.http.get<apiResponse>("https://reqres.in/api/users");
  }
}
