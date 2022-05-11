import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http: HttpClient) { }
  //add question
  public addQuestion(surveyQuestion:any,surveyId:string){
  console.log(surveyId);
    return this._http.post(`${baseUrl}/surveyQuestion/${surveyId}`,surveyQuestion);
  }
 
  public viewquestion(surveyId:any){
    console.log("hum ha  get method me", surveyId);
    return this._http.get(`${baseUrl}/surveyQuestion/${surveyId}`);
  }
}
