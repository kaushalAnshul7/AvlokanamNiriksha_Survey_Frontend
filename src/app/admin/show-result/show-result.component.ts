import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutsurveyquestiondataService } from 'src/app/Services/aboutsurveyquestiondata.service';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {
  qid: any;
  public surveyResultResponse = [] as any;
  resultAD: any;

  // countResultDisagree: any=0;
  // countResultAgree: number=0;


// chartType = 'doughnut';

//   chartDatasets = [
//     { data: [300, 50, 100, 40, 120], label: 'My First dataset' }
//   ];

//   chartLabels = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

//   chartColors = [
//     {
//       backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
//       hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
//       borderWidth: 2,
//     }
//   ];

//   chartOptions: any = {
//     responsive: true
//   };

//   chartClicked(event: any): void {
//     console.log(event);
//   }

//   chartHovered(event: any): void {
//     console.log(event);
//   }
  


  constructor(private aboutsurveyquestiondataService:AboutsurveyquestiondataService,private activatedRoute:ActivatedRoute) { 
    this.resultAD = []; }

  ngOnInit(): void {

    

    this.qid = this.activatedRoute.snapshot.params['qId'];


    this.aboutsurveyquestiondataService.getAboutSurveyQuestionById(this.qid).subscribe((surveyQuestion: any) => {



      console.log(surveyQuestion);
      this.aboutsurveyquestiondataService.getSurveyResponseBySurveyId(this.qid).subscribe((userResponseByQuestionId: any) => {



        // console.log(currentUser);

        // console.log(questionId);
        console.log(userResponseByQuestionId);


        // console.log(userResponseByQuestionId.length);



        for (var i = 0; i < surveyQuestion.length; i++) {
          var cAgree = 0;
          var cDisaagree = 0;

          this.resultAD = [cAgree, cDisaagree];

          for (var j = 0; j < userResponseByQuestionId.length; j++) {
            if (surveyQuestion[i].questionId == userResponseByQuestionId[j].questionId) {
              if (userResponseByQuestionId[j].surveyResponse == 0) {
                cDisaagree = cDisaagree + 1;

              }
              else if (userResponseByQuestionId[j].surveyResponse == 1) {
                cAgree = cAgree + 1;
              }
            }

            // this.surveyResultResponse.push();

           

          }
          // console.log("Question : " ,j);

          // console.log("gotuserRespnseTrue", cAgree);
          // console.log("gotuserRespnseFalse", cDisaagree);
          var totalPeople = cAgree+cDisaagree;
          var diffAgree = totalPeople-cAgree;
          var diffDisagree = totalPeople-cDisaagree;
          var percentageAgree = diffAgree/totalPeople;
          var percentageDisagree = diffDisagree/totalPeople;

          var calcPercentageAgree = percentageAgree * 100;
          var calcPercentageDisagree = percentageDisagree *100;

          this.resultAD = [cAgree, calcPercentageAgree, cDisaagree, calcPercentageDisagree];

          this.surveyResultResponse.push(this.resultAD);
          console.log(this.surveyResultResponse);
        }




      },
        (error) => {
          console.log(error);
        }
      )


    },
      (error) => {
        console.log(error);
      }
    )


  }

}