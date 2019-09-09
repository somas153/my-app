import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name
  pass

  constructor(private http: HttpClient, private router: Router, private titleService: Title) {
    this.titleService.setTitle("Login")
  }

  ngOnInit() {
  }
  login() {
    let body = {
      "name": this.name,
      "pass": this.pass
    }
    console.log(body)
    this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate', body).subscribe(data => {
      console.log(data)
      localStorage.setItem("logindata", JSON.stringify(data))
      console.log(data)
      this.router.navigateByUrl("moviealbums")
    })
  }
}