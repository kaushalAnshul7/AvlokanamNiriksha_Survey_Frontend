import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snack: MatSnackBar, private _login: LoginService, private router: Router) { }

  public user = {
    email: '',
    password: ''
  }
  ngOnInit(): void {
  }

  formSubmit() {
    console.log("login btn clicked");
    if (this.user.email.trim() == '' || this.user.email == null) {
      this.snack.open('username is required !!', '', { duration: 3000, });
      return;
    }
    // if (this.user.password.trim() == '' || this.user.password == null) {
    //   this.snack.open('password is required !!', '', {
    //     duration: 3000,
    //   });
    //   return;
    // }

    //request to server to generate token
    this._login.generateToken(this.user).subscribe({
      next: (data: any) => {
        //success
        console.log("success");
        console.log(data);

        //login....
        this._login.loginUser(data.token);
        this._login.getCurrentUser().subscribe(
          (user:any)=>{
            this._login.setUser(user);
            console.log(user);
            // redirect ....ADMIN: admin-dashboard
            // redirect ....NORMAL: normal-dashboard
            if(this._login.getUserRole()=='ADMIN'){
              // admin dashboard
            //  window.location.href='/admin';
             this.router.navigate(['admin']);
             this._login.loginStatusSubject.next(true);
            }else if(this._login.getUserRole()=='USER'){
              // normal userr dashboard
            //  window.location.href='/user-dashboard';
             this.router.navigate(['user']);
             this._login.loginStatusSubject.next(true);
            }else{
              this._login.logout();

            }
          }
        );

      },
      error: (error) => {
        //error
        console.log('error');
        console.log(error);
        this.snack.open('Invalid Detail !! Try again', '', {
          duration: 3000,
        });
      }
    }
    );
  }

}