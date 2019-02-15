import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name: String;
username:String;
email:String;
password:String;

  constructor(private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router:Router) { }


  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name : this.name,
      username : this.username,
      email : this.email,
      password : this.password
    }

  console.log('Validation started');

  //required fields
  if(!this.validateService.validateRegister(user)){
    //console.log('Please fill in all fields');
    this.flashMessage.show('Please fillin all fields',{cssClass:'alert-danger',timeout:3000});
    return false;
  }

  //validate email
  if(!this.validateService.validateEmail(user.email)){
    //console.log('Please enter valid email');
    this.flashMessage.show('Please enter valid email',{cssClass:'alert-danger',timeout:3000});
    return false;

    }
  //regisetr User
  this.authService.registerUser(user).subscribe(data=>{
    if(data.success){
      this.flashMessage.show('You are now registered,please login',{cssClass:'alert-success',timeout:3000});
      this.router.navigate(['/login']);
    }else{
      this.flashMessage.show('Something went wrong',{cssClass:'alert-danger',timeout:3000});
      this.router.navigate(['/register']);
  };
  })

  //  console.log('Validation completed');
  }

}
