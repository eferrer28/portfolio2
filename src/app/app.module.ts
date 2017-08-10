import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {Home} from "./home.component";
import { PageNotFound} from "./page-not-found-component";
import { Projects} from "./projects.component";


const appRoutes: Routes = [
  { path: 'home', component: Home },
  { path: '', component: Home},
  { path: 'projects', component: Projects },

    { path: '**', component: PageNotFound }

];

@NgModule({
  declarations: [
    AppComponent,
    Home,
    PageNotFound,
    Projects
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
