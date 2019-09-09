import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  MovieName
  Language
  Genre
  constructor(private titleService: Title, private http: HttpClient, private router: Router) {
    this.titleService.setTitle("MovieAlbums")
  }

  ngOnInit() {
  }

  save() {
    let body = {
      'MovieName': this.MovieName,
      'Language': this.Language,
      'Genre': this.Genre,
      'id': JSON.parse(localStorage.getItem("logindata")).success._id
    }
    // let httpHeaders = new HttpHeaders({ 'id': localStorage.getItem("logindata") })
    console.log(body)
    this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies', body).subscribe(data => {
      console.log(data)
      this.router.navigate(['/favoritealbums'])
    })
  }
  cancel() {
    console.log('cancelled')
    this.router.navigate(['/favoritealbums'])
  }
}