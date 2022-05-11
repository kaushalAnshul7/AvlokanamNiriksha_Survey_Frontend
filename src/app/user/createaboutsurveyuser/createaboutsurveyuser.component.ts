import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AboutsurveyService } from 'src/app/Services/aboutsurvey.service';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-createaboutsurveyuser',
  templateUrl: './createaboutsurveyuser.component.html',
  styleUrls: ['./createaboutsurveyuser.component.css']
})
export class CreateaboutsurveyuserComponent implements OnInit {
//this.router.navigate(['/user/surveyuserQuestion/', gotSurveyId]);
today='';
dd:any;
mm:any;
yyyy:any;
todayDate:any;


  constructor(private AboutService:AboutsurveyService, private snack: MatSnackBar, private router: Router, private loginService: LoginService) { }

  public survey = {
    surveyId: '',
    surveyTitle: '',
    surveyDate: '',
    surveyDescription: '',
    userEmail: ''
  }

  ngOnInit(): void {

     this.todayDate = new Date();
 this.dd = this.todayDate.getDate();
 this.mm = this.todayDate.getMonth() + 1; //January is 0!
 this.yyyy = this.todayDate.getFullYear();

if (this.dd < 10) {

  this.dd='0' + this.dd;

}

if (this.mm < 10) {
  this.mm = '0' + this.mm;
}     
this.today = this.yyyy + '-' + this.mm + '-' + this.dd;

console.log(this.today);
  }
  formSubmit() {

   

    if (this.survey.surveyTitle == '' || this.survey.surveyDate == '' || this.survey.surveyDescription == '') {
      this.snack.open("Can't leave required fields empty", '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      // alert("fields can't be empty");
      // this.router.navigate(['/user']);

      return
    }

     //getting current user
     this.loginService.getCurrentUser().subscribe((currentUser: any) => {

      // console.log(currentUser);


      this.survey.userEmail = currentUser.email;
     


      console.log(this.survey.userEmail);

    this.AboutService.addAboutSurvey(this.survey).subscribe({
      next: (data: any) => {
        //success
        console.log(data);
        // alert('success');
        Swal.fire("Survey Description Added");
        let gotSurveyId;
        gotSurveyId = data.surveyId;
        //  console.log("aagya", gotSurveyId);
        this.router.navigate(['/user/surveyuserQuestion/', gotSurveyId]);


      },
      error: (error) => {
        //error
        console.log(error);
        //alert('something went wrong');
        this.snack.open('something went wrong !!', '', {
          duration: 3000,
        });
      }
    }
    );


      console.log(this.survey.userEmail);


      
    },
      (error) => {
        console.log(error);
      }
    )


    
  }






}
