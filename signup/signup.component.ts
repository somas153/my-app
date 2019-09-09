import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  password: any;
  name: any;
  confirmpassword: any;
  constructor(private http: HttpClient,private router:Router,private titleService: Title) { 
    this.titleService.setTitle("Signup")
  }

  ngOnInit() {
  }
  signup() {
    let body = {
      "name": this.name,
      "password": this.password,
      "confirmpassword": this.confirmpassword,
    }
    console.log(body)
    if (this.password == this.confirmpassword) {
      this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users', body).subscribe(data => {
        console.log(data)
         this.router.navigateByUrl("login")
      })
    }
    else {
      console.log('pass mismatched') 
    }
  }
}