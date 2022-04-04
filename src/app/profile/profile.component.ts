import { Component, OnInit,Input } from '@angular/core';
import { UserApiService } from '../shared/user-api.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl } from '@angular/forms';
import * as $ from 'jquery'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  User:any={}
  profileForm = new FormGroup({
    'first-name': new FormControl(''),
    'last-name': new FormControl(''),
  });
  constructor(public userApi:UserApiService) {    
   }
  ngOnInit(): void {
    this.loadUser()   
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })
  }
  loadUser(){
    return this.userApi.getUser().subscribe((data:{})=>{
      this.User=data
    })
  }
  updateUser(updatedData:any){
    this.userApi.updateUser(updatedData)
    .subscribe(
      (data:{})=>{
        alert('data has been updated')
      }
    )
  }
  onSubmit() {
    this.userApi.updateUser
    (this.profileForm.value)
    .subscribe(
      (data:{})=>{
        alert('success')
        location.reload()
      }
    )
    console.warn(this.profileForm.value);
  }
}
