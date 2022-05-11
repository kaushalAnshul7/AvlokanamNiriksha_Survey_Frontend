import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {
  public surveyQuestion:any;

  qId:any;

  constructor(private _route: ActivatedRoute,
              private _question:QuestionService,
              private _snak: MatSnackBar) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qId'];
     console.log("areeee yaaa !!!", this.qId);
    // console.log(this.qTitle);
    this._question.viewquestion(this.qId).subscribe({ 
      next: (data: any) => {
        console.log(data);
        this.surveyQuestion = data;
       // Swal.fire('Success', 'quiz updated', 'success').then((e)=>{
        //  this._router.navigate(['/admin/quizzes']);
       // });  
      },
      error: (error)=>{
        console.log(error);
       // Swal.fire('Error', 'error in updating quiz', 'error'); 
      }
    });
  }
}
