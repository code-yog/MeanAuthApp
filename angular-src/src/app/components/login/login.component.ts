import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
//import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ToasterService } from '../../services/toaster-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:String;
password:String;
  constructor(
    //private flashMessage: FlashMessagesService,
  private authService: AuthService,
  private router:Router ,
  private toasterService: ToasterService
) { }

  ngOnInit() {
  }
onLoginSubmit(){
//  console.log(this.username);
const user = {
username : this.username,
password :  this.password
}
this.authService.authenticateUser(user).subscribe(data=> {
//console.log(data);
if(data.success){
  this.authService.storeUserData(data.token,data.user);
  //this.flashMessage.show("Welcome " + data.user.name,{cssClass:'alert-success',timeout:5000});
  this.toasterService.Success("Welcome " + data.user.name);
  this.router.navigate(['/dashboard']);

}else{
    //this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:5000});
    this.toasterService.Error(data.msg);
    this.router.navigate(['/login']);
}
});

}

}
