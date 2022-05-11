import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './admin/profile/profile.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateaboutsurveyComponent } from './admin/createaboutsurvey/createaboutsurvey.component';
import { SignupComponent } from './signup/signup.component';
import { CreatesurveyquestionComponent } from './admin/createsurveyquestion/createsurveyquestion.component';
import { AboutComponent } from './about/about.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { authInterceptorProviders } from './Services/auth.interceptor';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UsernavbarComponent } from './user/usernavbar/usernavbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { WelcomeComponent } from './user/welcome/welcome.component';
import { UserManagerComponent } from './user/user-manager/user-manager.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ShowsurveyComponent } from './admin/showsurvey/showsurvey.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { ShowQuestionComponent } from './admin/show-question/show-question.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { CreateaboutsurveyuserComponent } from './user/createaboutsurveyuser/createaboutsurveyuser.component';
import { CreatesurveyquestionuserComponent } from './user/createsurveyquestionuser/createsurveyquestionuser.component';
import { ShowQuestionUserComponent } from './user/show-question-user/show-question-user.component';
import { ShowsurveyUserComponent } from './user/showsurvey-user/showsurvey-user.component';
import { ShowResultComponent } from './admin/show-result/show-result.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    
    ProfileComponent,
    CreateaboutsurveyComponent,
    SignupComponent,
    CreatesurveyquestionComponent,
    AboutComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    UsernavbarComponent,
    WelcomeComponent,
    UserManagerComponent,
    AdminnavbarComponent,
    AdminhomeComponent,
    ShowsurveyComponent,
    ShowQuestionComponent,
    UserHomeComponent,
    CreateaboutsurveyuserComponent,
    CreatesurveyquestionuserComponent,
    ShowsurveyUserComponent,
    ShowQuestionUserComponent,
    ShowResultComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
    
    ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
