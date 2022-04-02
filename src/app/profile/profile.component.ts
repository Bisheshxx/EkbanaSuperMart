import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../shared/user-api.service';
import { environment } from 'src/environments/environment';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as $ from 'jquery'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  User:any={}
  closeResult = '';
  constructor(public userApi:UserApiService,private modalService: NgbModal) {
    
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

}
