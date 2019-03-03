import { Injectable } from '@angular/core';
declare var toastr:any
@Injectable()
export class ToasterService {

  constructor() { }

  Success(title:String,message?:String){    
    toastr.success(title,message);
  }

  Warning(title:String,message?:String){
    toastr.warning(title,message);
  }

  Error(message:String,title?:String){
    toastr.error(message,title);
  }

  Info(message:String){
    toastr.info(message);
  }

}
