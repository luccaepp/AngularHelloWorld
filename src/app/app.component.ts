import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = "luccaepp";
  userdata = {
    email: "luccaepp@gmail.com",
    role: "Programador"

  }
  title = 'HelloWorld';
}
