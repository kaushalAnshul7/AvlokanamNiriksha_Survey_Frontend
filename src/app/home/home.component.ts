import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private getStarted:LoginService) { }
  public isloggedin=false;

  ngOnInit(): void {
    this.isloggedin=this.getStarted.isLoggedIn();
  }

}
