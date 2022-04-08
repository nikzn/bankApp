import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  database: any = {
    1000: { accno: 1000, acname: "nikhil", pswd: 1000, balance: 1232 },
    1001: { accno: 1001, acname: "akhil", pswd: 1001, balance: 2332 },
    1002: { accno: 1002, acname: "joe", pswd: 1002, balance: 1212 },

  }

  constructor() { }
  register(accname: any, accno: any, pswd: any) {

    let database = this.database

    if (accno in database) {

      // alert("account exists")
      return false
    }

    else {
      //add database
      database[accno] = {
        accno,
        accname,
        pswd,
        balance: 0
      }
      return true
    }

  }

  login(accno: any, pswd: any) {

    let database = this.database

    if (accno in database) {

      if (pswd == database[accno]["pswd"]) {

        return true
      }
      else {
        alert("Incorrect password")
        return false
      }
    }
    else {

      alert("User does not exists")
      return false
    }

  }

  deposit(accno: any, pswd: any, amount1: any) {
    let amount = parseInt(amount1)
    let database = this.database
    {
      if (accno in database) {
        if (pswd == database[accno]["pswd"]) {
          database[accno]["balance"] += amount
          return database[accno]["balance"]
        }
        else {
          alert("wrong passwod")
          return false
        }
      }
      else {
        alert("invalid User")
        return false
      }
    }
  }


  withdraw(accno: any, pswd: any, amount1: any) {
    let amount = parseInt(amount1)
    let database = this.database
    if (accno in database) {
      if (pswd == database[accno]["pswd"]) {
        if (amount <= database[accno]["balance"]) {
          database[accno]["balance"] -= amount
          return database[accno]["balance"]
        }
        else {
          alert("not sufficient balance")
          return false
        }
      }

      else {
        alert("wrong password")
        return false
      }
    }
    else {
      alert("user does not exists")
      return false
    }


  }
}