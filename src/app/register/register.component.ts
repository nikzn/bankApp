import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    accname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    accno:[''],                
    pswd:['']

  })

  constructor(private db:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
register()
{
 
  var accno = this.registerForm.value.accno
  var accname = this.registerForm.value.accname
  var pswd = this.registerForm.value.pswd
  if(this.registerForm.valid)
  {
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
else
{
  alert("invalid form")
}
}
}
