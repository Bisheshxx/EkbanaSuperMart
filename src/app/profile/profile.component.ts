import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../shared/user-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  User:any={}
  constructor(public userApi:UserApiService) { }
  Apikey=environment.ApiKey

  ngOnInit(): void {
    this.loadUser()    
  }
  loadUser(){
    return this.userApi.getUser().subscribe((data:{})=>{
      this.User=data
    })
  }

}
