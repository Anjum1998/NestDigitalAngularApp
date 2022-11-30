import { Component } from '@angular/core';

@Component({
  selector: 'app-add-contactus',
  templateUrl: './add-contactus.component.html',
  styleUrls: ['./add-contactus.component.css']
})
export class AddContactusComponent {

  name=""
  designation=""
  email=""
  phone=""
  subject=""

  readValue=()=>
  {
    let data:any={"name":this.name,"designation":this.designation,"email":this.email,"phone":this.phone,"subject":this.subject}
    console.log(data)
    this.name=""
    this.designation=""
    this.email=""
    this.phone=""
    this.subject=""
  }
}
