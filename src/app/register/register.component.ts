import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  accname=""
  accno=""
  pswd=""

  constructor(private db:DataService,private router:Router) { }

  ngOnInit(): void {
  }
register()
{
 
  var accno = this.accno
  var accname = this.accname
  var pswd = this.pswd
  const result = this.db.register(accname,accno,pswd)
  
  if (result) {
    alert("successfully registed")
    this.router.navigateByUrl("")
  }
  else
  {
    alert("account exists")
  }
}

}
