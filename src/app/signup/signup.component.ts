import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private snack: MatSnackBar,
    private userService: UserServiceService
  ) { }


  public user = {
    fullName: '',
    mobileNo: '',
    email: '',
    organisation: '',
    profession: '',
    password: ''
  }

  ngOnInit(): void {
  }
  formSubmit() {
    if (this.user.fullName == '' || this.user.fullName == null) {
      this.snack.open("Username is required !!", '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;

    }

    if (this.user.mobileNo == '' || this.user.mobileNo == null) {
      this.snack.open("Mobile No. is required !!", '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    if (this.user.email == '' || this.user.email == null) {
      this.snack.open("Email is required !!", '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;

    }

    if (this.user.organisation == '' || this.user.organisation == null) {
      this.snack.open("Organisation is required !!", '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;

    }
    // alert("fields can't be empty");




    //validation
    // addUser: userservice
    this.userService.addUser(this.user).subscribe({
      next: (data: any) => {
        //success
        console.log("Hello ", data);
        // alert('success');
        Swal.fire('Successfully done !!', 'user id is ' + data.id, 'success');
      },
      error: (error) => {
        //error
        console.log(error);
        //alert('something went wrong');
        this.snack.open('something went wrong !!', '', {
          duration: 3000,
        });
      }
    })





  }
}


