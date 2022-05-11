import { Component, OnInit } from '@angular/core';
import { AboutsurveyService } from 'src/app/Services/aboutsurvey.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-showsurvey',
  templateUrl: './showsurvey.component.html',
  styleUrls: ['./showsurvey.component.css']
})
export class ShowsurveyComponent implements OnInit {
  public survey=[{
    surveyTitle:'',
    surveyDescription:'',
    surveyDate:'',
    surveyId:'',
    userEmail:'',
  }];

  constructor(private _category:AboutsurveyService) { }

  ngOnInit(): void {
    this._category.viewsurvey().subscribe({ 
      next: (data:any)=>{
       this.survey = data;
       console.log(this.survey);
     },
     error: (error)=>{
       console.log(error);
       Swal.fire('Error !!', 'Error in loading data', 'error');
     }
   });
  }

}
