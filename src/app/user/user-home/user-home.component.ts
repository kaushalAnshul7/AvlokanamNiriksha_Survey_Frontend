import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  user:any=null;

  constructor(private login:LoginService) { }

  ngOnInit(): void {

    this.user=this.login.getUser();

  }
}
