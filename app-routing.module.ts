import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
{path:'',component:SignupComponent},
 {path:'moviealbums',component:MoviesComponent},
 {path:'favoritealbums',component:MovieslistComponent},
 {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
