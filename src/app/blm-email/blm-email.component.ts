import { Component, OnInit } from '@angular/core';
import { BlmEmailService } from '../blm-email.service';
import { BlmMapService } from '../blm-map.service';
import {Location} from '../location.mode';
import { UserInfo } from '../UserInfo';
import { CongressmanInfo } from '../CongressmanInfo';

@Component({
  selector: 'app-blm-email',
  templateUrl: './blm-email.component.html',
  styleUrls: ['./blm-email.component.css']
})
export class BlmEmailComponent implements OnInit {

  firstName: String;
  lastName: String;
  email: String;
  password: String;
  location: Location
  userInfo: UserInfo;
  result: String;
  conressmanInfo: CongressmanInfo = new CongressmanInfo();

  constructor(private blmEmailService: BlmEmailService, private locationApi: BlmMapService) { }

  ngOnInit(): void {
  }

  findCongressmen(){
    this.location = new Location();
    this.userInfo = new UserInfo();
    this.locationApi.getLocation().subscribe(data =>{
      this.location = data;
      this.userInfo.zipCode = this.location.zip;
      this.blmEmailService.findCongressman(this.userInfo).subscribe(response => {
        this.conressmanInfo = response;
        console.log(this.conressmanInfo.zipCodeName)
      })
    })
  }

  sendEmail(){
    this.location = new Location();
    this.userInfo = new UserInfo();
    this.locationApi.getLocation().subscribe(data =>{
      this.location = data;
      this.userInfo.firstName = this.firstName;
      this.userInfo.lastName = this.lastName;
      this.userInfo.zipCode = this.location.zip;
      this.userInfo.city = this.location.city;
      this.userInfo.email = this.email;
      this.userInfo.password = this.password;
      this.blmEmailService.sendCustomEmail(this.userInfo).subscribe(
        response => this.result = "Email has been sent!",
        err => this.result = "Error has occured"
      )
    })
  }



}
