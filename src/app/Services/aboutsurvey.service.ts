import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AboutsurveyService {

  constructor(  private http : HttpClient) { }

    //add new user
    public addAboutSurvey(aboutSurvey:any){
      return this.http.post(`${baseUrl}/survey/`,aboutSurvey);
    }
    // Load all the categories
  public viewsurvey(){
    return this.http.get(`${baseUrl}/survey/`);
  }
}
