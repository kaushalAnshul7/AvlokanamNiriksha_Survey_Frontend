import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createsurveyquestion',
  templateUrl: './createsurveyquestion.component.html',
  styleUrls: ['./createsurveyquestion.component.css']
})
export class CreatesurveyquestionComponent implements OnInit {

 
    id: string;

    reloadCurrentPage(){
      window. location. reload();
    
    }
 
  
  
    constructor(private activatedRoute: ActivatedRoute, private snack: MatSnackBar, 
      private surveyQuestionService: QuestionService, private router: Router, private loginService: LoginService) {
      this.id = '';
    }
  
  
  
  get getSurveyId(){
    return this.id;
  }
  
  
  public surveyQuestion = {
    surveyId: '',
    questionId: '',
    questionTitle: '',
    questionDescription: '',
    userEmail:''
  }
  
  
  
  
    ngOnInit(): void {
  
      this.id = this.activatedRoute.snapshot.params['surveyId'];

      this.surveyQuestion.surveyId = this.id;
  
  
    }
    formSubmit() {





    if (this.surveyQuestion.questionTitle == '' || this.surveyQuestion.questionDescription == '') {
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

      console.log(currentUser);


      this.surveyQuestion.userEmail=currentUser.email;


      this.surveyQuestionService.addQuestion(this.surveyQuestion,this.id).subscribe({
        next: (data: any) => {
          //success
          // alert('success');
          Swal.fire("Survey Added");
          window. location. reload();
          //  let gotSurveyId;
          //  gotSurveyId = data.surveyId;
          //  console.log("aagya", gotSurveyId);
          //  this.router.navigate(['/user/createsurvey/createsurveyquestion/',gotSurveyId]);
  
  
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
        },
      (error) => {
        console.log(error);
      }
    )



   
  }
  }
