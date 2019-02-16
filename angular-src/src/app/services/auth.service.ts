import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
 authToken : any;
 user:any;
  constructor(private http:Http) { }

registerUser(user){
  let headers = new Headers();
  headers.append('content-Type','application/json');
  //return this.http.post('http://localhost:3000/users/register',user,{headers:headers})
  return this.http.post('users/register',user,{headers:headers})
  .map(res=>res.json());
}

authenticateUser(user){
  let headers = new Headers();
  headers.append('content-Type','application/json');
  //return this.http.post('http://localhost:3000/users/authenticate',user,{headers:headers})
  return this.http.post('users/authenticate',user,{headers:headers})
  .map(res=>res.json());
}

getProfile(){
  let headers = new Headers();
  this.loadToken();
  //console.log("Token: "+this.authToken);
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type','application/json');
  //return this.http.get('http://localhost:3000/users/profile',{headers:headers})
  return this.http.get('users/profile',{headers:headers})
  .map(res=>res.json());
}

loadToken(){
  const token = localStorage.getItem('id_token');
  this.authToken = token;
}

storeUserData(token,user){
  localStorage.setItem('id_token',token);
  localStorage.setItem('user',JSON.stringify(user));
  this.authToken = token;
  this.user = user;
}

logOut(){
  this.authToken = null;
  this.user = null;
  localStorage.clear();
}


}
