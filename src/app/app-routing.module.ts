import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { CreateaboutsurveyComponent } from './admin/createaboutsurvey/createaboutsurvey.component';
import { CreatesurveyquestionComponent } from './admin/createsurveyquestion/createsurveyquestion.component';
import { ShowQuestionComponent } from './admin/show-question/show-question.component';
import { ShowsurveyComponent } from './admin/showsurvey/showsurvey.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './Services/admin.guard';
import { NormalGuard } from './Services/normal.guard';
import { ShowQuestionUserComponent } from './user/show-question-user/show-question-user.component';
import { SignupComponent } from './signup/signup.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserManagerComponent } from './user/user-manager/user-manager.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { WelcomeComponent } from './user/welcome/welcome.component';
import { ShowsurveyUserComponent } from './user/showsurvey-user/showsurvey-user.component';
import { CreatesurveyquestionuserComponent } from './user/createsurveyquestionuser/createsurveyquestionuser.component';
import { CreateaboutsurveyuserComponent } from './user/createaboutsurveyuser/createaboutsurveyuser.component';
import { ShowResultComponent } from './admin/show-result/show-result.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },

  {
    path: 'admin',
    component: AdmindashboardComponent,
    canActivate: [AdminGuard],
    children:
      [
        {
          path: '',
          component: AdminhomeComponent,
        },
        {
          path: 'survey',
          component: CreateaboutsurveyComponent,
        },
        {
          path: 'surveyQuestion/:surveyId',
          component: CreatesurveyquestionComponent,
        },
        {
          path: 'showSurvey',
          component: ShowsurveyComponent,
        },
        {
          path: 'showQuestion/:qId',
          component: ShowQuestionComponent,
        },
        {
          path: 'showresultUser/:qId',
          component: ShowResultComponent,
        },

      ],

  },
  {
    path: 'user',
    component: UserdashboardComponent,
    canActivate: [NormalGuard],
    children:
      [{
        path: '',
        component: UserHomeComponent,
      },
      {
        path: 'showSurvey',
        component: ShowsurveyUserComponent,
      },
      {
        path: 'manager',
        component: UserManagerComponent,
        pathMatch: 'full'
      },
      {
        path: 'survey',
        component: CreateaboutsurveyuserComponent,
      },
      {
        path: 'surveyuserQuestion/:surveyId',
        component: CreatesurveyquestionuserComponent,
      }, {
        path: 'showuserQuestion/:surveyId',
        component: ShowQuestionUserComponent,
      },
      

      ],


  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
