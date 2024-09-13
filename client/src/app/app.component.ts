import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  title = 'DatingApp';
  users: any;

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({ // subscribe to obervable
      next: response => this.users = response, // callback functions - sta treba da se radi
      error: error => console.log(error), // - sta ako je error
      complete: () => console.log('Request has completed.') // - sta ako uspe da se uradi f-ja
    });
  }
}
