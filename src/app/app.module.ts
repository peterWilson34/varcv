import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import * as $ from 'jquery';

import { OwlModule } from 'ngx-owl-carousel';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CvComponent } from './cv/cv.component';
import { PersonalInfoComponent } from './cv/personal-info/personal-info.component';
import { LanguagesComponent } from './cv/languages/languages.component';
import { TechnicalSkillsComponent } from './cv/technical-skills/technical-skills.component';
import { EducationComponent } from './cv/education/education.component';
import { WorkExperienceComponent } from './cv/work-experience/work-experience.component';
import { CoursesComponent } from './cv/courses/courses.component';
import { TemplateComponent } from './cv/template/template.component';
import { ObjectivesComponent } from './cv/objectives/objectives.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'cv',component:CvComponent,children:[
    {path:'personal-info',component:PersonalInfoComponent},
    {path:'languages',component:LanguagesComponent},
    {path:'technical-skills',component:TechnicalSkillsComponent},
    {path:'education',component:EducationComponent},
    {path:'objectives',component:ObjectivesComponent},
    {path:'work-experience',component:WorkExperienceComponent},
    {path:'courses',component:CoursesComponent},
    {path:'template',component:TemplateComponent}
  ]}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CvComponent,
    PersonalInfoComponent,
    LanguagesComponent,
    TechnicalSkillsComponent,
    EducationComponent,
    WorkExperienceComponent,
    CoursesComponent,
    TemplateComponent,
    ObjectivesComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
