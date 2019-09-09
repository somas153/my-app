import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankappComponent } from './bankapp/bankapp.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms'
import { SignupComponent } from './signup/signup.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { HttpClientModule } from '@angular/common/http'
import { MovieserviceService } from './movieservice.service';
import { LoginComponent } from './login/login.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
@NgModule({
  declarations: [
    AppComponent,
    BankappComponent,
    SignupComponent,
    MoviesComponent,
    MovieslistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    FilterPipeModule
  ],
  providers: [MovieserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
