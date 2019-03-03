import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
//import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ToasterService } from '../../services/toaster-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  constructor(
    //private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router:Router,
    private toasterService: ToasterService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile=>{
      this.user = profile.user;
    },
    err=>{
      console.log(err);
    //  this.flashMessage.show(err.toJSON(),{cssClass:'alert-danger',timeout:3000});
      //this.flashMessage.show(JSON.stringify(err._body),{cssClass:'alert-danger',timeout:3000});
        this.toasterService.Error(JSON.stringify(err._body));
      return false;
    }
  )
  }

}
