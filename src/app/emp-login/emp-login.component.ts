import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent {

  empid=""
  password=""
constructor(private router:Router){}
  readValue=()=>
  {
    let data:any={"empid":this.empid,"password":this.password}
    console.log(data)
    if (this.empid=="1122"&& this.password=="12345") {
      this.router.navigate(['/gallery'])
    } else {
      
    }
  }

}
