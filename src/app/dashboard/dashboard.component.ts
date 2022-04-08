import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

accno=""
pswd=""
amount=""

accno1=""
pswd1=""
amount1=""


  constructor(private ds:DataService) { 


  }

  ngOnInit(): void {
  }

  deposit()
  {
   var accno=this.accno
   var pswd=this.pswd
   var amount=this.amount

   const result=this.ds.deposit(accno,pswd,amount)
   if (result) {
     alert(amount+"successfully deposited... new balance is" +result)
   } 
  }

withdraw()
{
var accno=this.accno1
var pswd=this.pswd1
var amount=this.amount1

const result=this.ds.withdraw(accno,pswd,amount)
if (result) {
  alert(amount+"successfully withdraw... new balance is"+result)
}
}

}
