import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../shared/user-api.service';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {
  @Input() userDetails = {first_name:'',last_name:'',mobile_number:'',email:'',password:''}
  constructor(public userApi:UserApiService,public router:Router) { }
  ngOnInit(): void {
  }
  createUsers(dataUser:any){
    this.userApi.createUsers(this.userDetails)
    .subscribe(
      (data:{})=>{
        this.router.navigate(['/login'])
      }
    )
  }

}
