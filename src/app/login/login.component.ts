import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "let debt increase"
  accnum = "enter the accno"
  accno = ""
  pswd = ""

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  accnoChange(event: any) {
    console.log(event.target.value);

    this.accno = event.target.value
  }

  pswdChange(event: any) {
    console.log(event.target.value);
    this.pswd = event.target.value
  }

//   //login using event binding
  login() {
    var accno = this.accno
    console.log(accno);

    var pswd = this.pswd

    let database = this.ds.database

    if (accno in database) {

      if (pswd == database[accno]["pswd"]) 
      {

        this.router.navigateByUrl("dashboard")
      }
      else {
        alert("Incorrect password")
      }
    }
      else
      {
      alert("User does not exists")
  }

    }
}


//login using template referning variable 
// login(a:any,p:any) {


  // console.log(a.value);
  
//   var accno = a.value
//   var pswd = p.value

//   let database = this.database

//   if (accno in database) {

//     if (pswd == database[accno]["pswd"]) 
//     {
//       alert("login succesful")

//     }
//     else {
//       alert("Incorrect password")
//     }
//   }
//     else
//     {
//     alert("User does not exists")
// }

//   }
// }

// login(a:any,p:any) {


//   // console.log(a.value);
  
//   var accno = a.value
//   var pswd = p.value

//   let database = this.database

//   if (accno in database) {

//     if (pswd == database[accno]["pswd"]) 
//     {
//       alert("login succesful")

//     }
//     else {
//       alert("Incorrect password")
//     }
//   }
//     else
//     {
//     alert("User does not exists")
// }

//   }
// }
