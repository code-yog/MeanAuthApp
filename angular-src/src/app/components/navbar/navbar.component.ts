import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
//import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ToasterService } from '../../services/toaster-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    //private flashMessage: FlashMessagesService,
  private authService: AuthService,
  private router:Router,
private toasterService: ToasterService) { }

  ngOnInit() {
  }

onLogOutClick(){
this.authService.logOut();
//this.flashMessage.show("You are logged out ",{cssClass:'alert-success',timeout:5000});
  this.toasterService.Success("You are logged out ");
this.router.navigate(['/login']);
return false;
}
}
