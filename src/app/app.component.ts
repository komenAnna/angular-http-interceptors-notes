import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-http-interceptors';


  constructor(private http:HttpClient){}

  callAPIHandler(){
    this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
