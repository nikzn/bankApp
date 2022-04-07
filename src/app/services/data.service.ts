import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  database:any = {
    1000: { accno: 1000, acname: "nikhil", pswd: 1000, balance: 1232 },
    1001: { accno: 1001, acname: "akhil", pswd: 1001, balance: 2332 },
    1002: { accno: 1002, acname: "joe", pswd: 1002, balance: 1212 },

  }

  constructor() { }
register(accname:any,accno:any,pswd:any){

let database = this.database

if (accno in database) {

  // alert("account exists")
  return false
}

else
{
//add database
database[accno]={
  accno,
  accname,
  pswd,
  balance:0
}
return true
}

}

}
