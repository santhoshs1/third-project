import { Component, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import{apiResponse} from './models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'third-project';
  // apiResponse:apiResponse;
  // user="https://reqres.in/api/users";
  constructor(public data:UserService){}
  
  users$:Observable <apiResponse> =new Observable();
  
  ngOnInit(){
    this.users$=this.data.getUsers();
    console.log(this.users$);
  }
  
}


    // this.userData.getuser().subscribe((result)=>{
    //   console.log(result);
  
  // console.log(this.UserService);

